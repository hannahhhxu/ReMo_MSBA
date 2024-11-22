interface District {
  name: string;
  type?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  county?: string;
  country?: string;
  studentPopulation?: string;
  totalDays?: string;
}

export interface Client {
  _id: string;
  created?: Date;
  deletedDate?: Date;
  districts?: District[];
  isActive?: boolean;
  name?: string;
  ownerEmails?: string[];
  state?: string;
  updated?: Date;
}
