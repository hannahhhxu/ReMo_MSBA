import type { Client } from "./client";

export interface School {
  _id: string;
  name?: string;
  client?: Client;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  totalDays?: string;
  studentPopulation?: string;
  rooms?: string[];
  created?: Date;
  updated?: Date;
}
