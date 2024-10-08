import type { INamedItem } from "./INamedItem";
import { ContentFormatTypeName } from "../../enums/ContentFormatTypeName";
import { ContentFormatTypeId } from "../../enums/ContentFormatTypeId";

export interface IContentFormat extends INamedItem {
  hasAudioSynchronizedText: boolean;
  id: ContentFormatTypeId;
  name: ContentFormatTypeName;
}
