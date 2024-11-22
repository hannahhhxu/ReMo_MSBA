import type { Classes } from "./classes";
import type { Client } from "./client";
import type { Library } from "./library";
import type { Reader } from "./reader";
import type { School } from "./school";

export interface Educator {
  _id: string;
  classes?: Classes[];
  client?: Client;
  created?: Date;
  displayName?: string;
  email: string;
  firstName?: string;
  inClassRole?: string;
  lastName?: string;
  libraries?: Library[];
  reader?: string;
  readers?: Reader[];
  schools?: School[];
  title?: string;
  updated?: Date;
}
