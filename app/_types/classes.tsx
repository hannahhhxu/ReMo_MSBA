import type { Library } from "./library";
import type { Educator } from "./educator";
import type { Reader } from "./reader";
import type { Client } from "./client";
import type { School } from "./school";

export interface Classes {
  _id: string;
  client?: Client;
  dateStatus?: string;
  educators?: Educator[];
  endDate?: string;
  gradesTaught?: string[];
  gradingCycle?: string;
  libraries?: Library[];
  minutesInClass?: number;
  name?: string;
  readers?: Reader[];
  room?: string;
  school?: School;
  startDate?: string;
  updated?: Date;
}
