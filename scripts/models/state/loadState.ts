import { Title } from "./title";
import { Chapter } from "./chapter";

/**
 * Network traffic load state
 */
export class LoadState {
  id: string;
  expires: Date;
  cover_href: string;
  title: Title;
  authors: Array<string>;
  narrators: Array<string>;
  description: string;
  chapters: Array<Chapter>;

  loaded(): boolean {
    return this.expires != undefined
      && this.title != undefined
      && this.chapters != undefined
      && this.authors != undefined;
  }
}