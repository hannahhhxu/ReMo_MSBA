import type { BookEngagement } from "./book-engagement";
import type { BookMeta } from "./book-meta";
import type { Library } from "./library";

export interface SimpleBook {
  __typename?: string;
  book: string;
  bookMeta: string;
  bookEngagement?: string;
  title: string;
  image: string;
}

export interface BookActivity {
  condition?: string;
  reader?: string;
  status?: string;
  created?: Date;
}

export interface BookPreview {
  _id: string;
  books: Book[];
  author?: string;
  series?: string;
  seriesType?: string;
  seriesBookNumber?: number;
  isFiction?: boolean;
  isNonFiction?: boolean;
  isBlended?: boolean;
  title?: string;
  subtitle?: string;
  image?: string;
  isbn13?: string;
  pageCount?: string;
  bookEngagement?: BookEngagement;
}

export interface Book {
  _id: string;
  activity?: BookActivity[];
  assortments?: string[];
  bookMeta?: BookMeta;
  bookEngagement?: BookEngagement;
  condition?: string;
  copyrightDate?: string;
  edition?: string;
  enteredById?: string;
  enteredByType?: string;
  foreword?: string;
  format?: string;
  image?: string;
  isAvailable?: boolean;
  isUnpaged?: boolean;
  isbn10?: string;
  isbn13?: string;
  library?: Library;
  location?: string;
  notes?: string;
  ownerId?: string;
  ownerType?: string;
  pageCount?: string;
  pubDate?: string;
  title?: string;
  wordCount?: string;
  created?: Date;
  updated?: Date;
}
