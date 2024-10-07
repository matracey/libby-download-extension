/**
 * Chapter metadata
 */
export class Chapter {
  title: string;
  paths: string[];
  offset: number;

  constructor(title: string, paths: string[], offset: number) {
    this.title = title;
    this.paths = paths;
    this.offset = offset;
  }
}
