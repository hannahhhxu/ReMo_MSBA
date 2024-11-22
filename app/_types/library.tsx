import type { Classes } from "./classes";
import type { Client } from "./client";
import type { Educator } from "./educator";
import type { School } from "./school";

interface Assortment {
  name: string;
  bookCount: number;
  filters: {
    field: string;
    values: string[];
  };
}
export interface Library {
  _id: string;
  assortments?: Assortment[];
  classes?: Classes[];
  client?: Client;
  created?: Date;
  educators?: Educator[];
  name?: string;
  room?: string;
  schools?: School[];
  updated?: Date;
}
