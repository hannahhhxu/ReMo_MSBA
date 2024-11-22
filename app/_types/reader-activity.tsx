import type { Book } from "./book";
import type { BookMeta } from "./book-meta";
import type { Reader } from "./reader";

export interface ReaderActivityResponse {
  label: string;
  name: string;
  response: string;
  sort: string;
}

export interface ReaderActivity {
  _id: string;
  abandonNextStep?: string;
  abandonReason?: string;
  action: string;
  activeAudience?: string;
  activeReader?: string;
  author?: string;
  book: Book;
  bookCompleted?: boolean;
  bookMeta: BookMeta;
  completionGoal?: string;
  completionNear?: string;
  completionHasNextBook?: string;
  completionReaderValue?: string;
  condition?: string;
  description?: string;
  educator?: string;
  educatorPresent?: boolean;
  title?: string;
  image?: string;
  isbn13?: string;
  pubDate?: string;
  isActive?: boolean;
  startPage?: string;
  endPage?: string;
  pagesRead?: string;
  gradeLevel?: string;
  gradeLevelStatus?: string;
  levelOfFocus?: string;
  link?: string;
  magazineTitle?: string;
  materialType?: string;
  minutesListened?: string;
  minutesRead?: string;
  needNewBook?: boolean;
  notes?: string;
  notesVisibleToReader?: string;
  outsideOfSchool?: string;
  purpose?: string;
  rating?: number;
  reader?: Reader;
  readerName?: string;
  readerIsEducator?: boolean;
  readingIssues?: string;
  readingProgress?: string;
  readingVolume?: string;
  requestConference?: boolean;
  requestRecommendation?: boolean;
  requestHelp?: boolean;
  responseSubtype?: string;
  responsePages?: string;
  responseType?: string;
  responses?: ReaderActivityResponse[];
  selector?: string;
  selectionMethod?: string;
  selectionReason?: string;
  source?: string;
  created?: Date;
  updated?: Date;
}
