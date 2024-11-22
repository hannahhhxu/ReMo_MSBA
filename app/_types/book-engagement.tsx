import type { BookMeta } from "./book-meta";
import type { Book } from "./book";
import type { Educator } from "./educator";
import type { ReaderActivity } from "./reader-activity";
import { Reader } from "./reader";

export interface ReadingLog {
  __typename?: string;

  minutesRead: number;
  pagesRead: number;

  bookGoingWell: boolean;
  bookWantToAbandon: boolean;
  bookCompleted: boolean;
  bookNearCompletion: boolean;
  conferenceRequested: boolean;
  helpRequested: boolean;

  created?: Date;
  updated?: Date;
}

export interface ReadingResponse {
  __typename?: string;
  topic: string;
  subtopic: string;
  form: string;
  response: string[];
  created: Date;
  updated: Date;
}

export interface BookEngagement {
  _id: string;
  bookMeta?: BookMeta;
  book?: Book;
  bookHistory?: Book[];
  readerActivity?: ReaderActivity[];
  title?: string;
  image?: string;
  isbn13?: string;
  pageCount?: number;
  educator?: Educator;
  hasIndependentLesson?: boolean;
  hasReadingLog?: boolean;
  hasReadingResponse?: boolean;
  hasReview?: boolean;
  review?: ReaderActivity;
  rating?: number;
  minutesRead?: number;
  pagesRead?: number;
  pagesForReadingRate?: number;
  percentRead?: number;
  previouslyCompleted?: boolean;
  previouslyStopped?: boolean;
  readingRate?: number;
  readerIsEducator?: boolean;
  reader?: Reader;
  shelf?: string;
  status?: string;
  updated?: Date;
}
