/**
 * Title metadata
 */
export class Title {
  title: string;
  subtitle: string;
  collection: string;

  constructor(title: string, subtitle: string, collection: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.collection = collection;
  }
}