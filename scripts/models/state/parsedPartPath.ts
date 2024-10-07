export class ParsedPartPath {
  path: string;
  offset: number;

  constructor(path: string) {
    const split = path.split("#");
    if (split.length === 2) {
      this.offset = parseInt(split[1]);
    } else {
      this.offset = 0;
    }
    this.path = split[0];
  }
}