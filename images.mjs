import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdir } from "node:fs/promises";
import process from "node:process";

import sharp from "sharp";
import { Jimp } from "jimp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");
const IS_VERBOSE = process.argv.some(a => ["--verbose", "-v"].includes(a));

/**
 * Creates a directory if it does not already exist.
 *
 * @param {string} path - The path of the directory to create.
 * @param {Object} [options] - The options to pass to the mkdir function.
 * @returns {Promise<void>} A promise that resolves if the directory is created or already exists, and rejects if there is an error.
 */
const mkdirIfNot = (path, options) =>
  mkdir(path, options).catch(err => {
    if (err.code !== "EEXIST") {
      throw err;
    }
  });

/**
 * Generates an object containing resized PNG images from an SVG file.
 *
 * @param {string} pathToSvg - The file path to the SVG image.
 * @param {number[]} sizes - An array of sizes to resize the SVG image to.
 * @returns {Object} An object where the keys are the size labels (e.g., 'extension_128') and the values are the resized PNG images.
 */
const buildSharpImages = (pathToSvg, sizes) =>
  sizes
    .map(size => [size, sharp(pathToSvg).resize(size, size).png()])
    .reduce(
      (acc, [size, s]) => ({
        ...acc,
        [`extension_${size}`]: s,
      }),
      {}
    );

/**
 * Creates a dark variant of the given image by inverting its colors.
 *
 * @param {string} path - The file path of the image to be processed.
 * @returns {Promise<string>} - The file path of the dark variant.
 */
const createDarkVariant = async path => {
  const fileExt = path.split(".").pop();
  const darkPath = path.replace(`.${fileExt}`, `_dark.${fileExt}`);
  const image = await Jimp.read(path);
  await image.invert().write(darkPath);

  return darkPath;
};

/**
 * Creates an image file from a Sharp image object and generates a dark variant.
 *
 * @param {Object} sharpImage - The Sharp image object to be processed.
 * @param {string} path - The file path where the image will be saved.
 * @returns {Promise<string[]>} - A promise that resolves with an array containing the file path and the dark variant file path.
 */
const createImage = async (sharpImage, path) =>
  sharpImage
    .toFile(path)
    .then(() => createDarkVariant(path))
    .then(darkPath => [path, darkPath]);

/**
 * Creates images in the specified directory using the provided sharp images.
 *
 * @param {string} dir - The directory where the images will be created.
 * @param {Object} sharpImages - An object where keys are image names and values are sharp image instances.
 * @returns {Promise<Array>} A promise that resolves to an array of strings containing the file paths of the generated images.
 */
const createImages = async (dir, sharpImages) => {
  const images = Object.keys(sharpImages);

  await mkdirIfNot(dir, { recursive: true });
  const tuples = await Promise.all(images.map(k => createImage(sharpImages[k], join(dir, `${k}.png`))));
  return tuples.flat();
};

const sizes = [16, 32, 48, 128, 256, 512];
const pathToSvg = join(__dirname, "images/extension.svg");
const outDirs = [join(__dirname, "images")];
const images = buildSharpImages(pathToSvg, sizes);

Promise.all(outDirs.map(d => createImages(d, images)))
  .then(res => res.flat())
  .then(files => console.log(IS_VERBOSE ? `Images generated\n\n${files.join("\n")}` : "Images generated"))
  .catch(err => console.error(err));
