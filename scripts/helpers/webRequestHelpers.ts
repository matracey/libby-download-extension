/**
 * Buffers data from a browser web request StreamFilter, decodes it as UTF-8 text,
 * and resolves with the concatenated string data once the stream stops.
 *
 * @param sF - The browser web request StreamFilter to buffer data from.
 * @returns A promise that resolves with the concatenated string data.
 * @throws Will reject the promise if an error occurs during data decoding.
 */
export const bufferStreamFilterData = async (sF: browser.webRequest.StreamFilter): Promise<string> => {
  const tDec = new TextDecoder("utf-8");
  const tEnc = new TextEncoder();
  let rejected = false;

  return new Promise((resolve, reject) => {
    let data = "";

    sF.ondata = event => {
      try {
        data += tDec.decode(event.data, { stream: true });
      } catch (e: unknown) {
        rejected = true;
        reject(e);
      }
    };

    sF.onstop = () => {
      if (!rejected) {
        resolve(data);
        sF.write(tEnc.encode(data));
        sF.disconnect();
      }
    };
  });
};
