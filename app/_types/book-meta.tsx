export interface BookMetaEdition {
  isbn10?: string;
  isbn13?: string;
  format?: string;
  image?: string;
  title?: string;
  author?: string;
  pageCount?: string;
  isUnpaged?: boolean;
  wordCount?: string;
  pubDate?: string;
  copyrightDate?: string;
  foreword?: string;
  edition?: string;
}

export interface BookMeta {
  _id: string;
  isbn10?: string[];
  isbn13?: string[];
  title: string;
  subtitle?: string;

  author?: string;
  editor?: string;
  illustrator?: string;
  creators?: string[];
  defaultEdition?: number;
  editions?: BookMetaEdition[];
  binding?: string;
  images?: string;
  isFiction?: boolean;
  isNonFiction?: boolean;
  isBlended?: boolean;

  guidedReadingLevel?: string;
  lexileLevel?: string;

  hasMultiplePov?: boolean;
  hasUnreliableNarrative?: boolean;

  characterEthnicity?: string[];
  characterGenderIdentity?: string[];
  characterRaceCulture?: string[];
  characterReligion?: string[];
  characterSexualOrientation?: string[];
  awards?: string[];
  contentWarning?: string[];
  timePeriod?: string[];
  narrativeForm?: string[];
  genre?: string[];
  historicalEvents?: string[];
  internationalAwards?: string[];

  language?: string[];
  languageRegister?: string[];
  literaryDevices?: string[];
  modesOfWriting?: string[];
  pointOfView?: string[];
  subject?: string[];
  textFeatures?: string[];
  textStructure?: string[];
  tags?: string[];
  topic?: string[];
  voice?: string[];

  publisher?: string[];
  pubDate?: string;
  pageCount?: string;

  series?: string;
  seriesType?: string;
  seriesBookNumber?: number;

  subjects?: string[];
  synopsis?: string;

  created?: Date;
  updated?: Date;
}
