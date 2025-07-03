import { UserOutput } from "./user.type";

export type EventOutput = {
  id: string;
  name: string;
  description: string;
  eventDate: string;
  publicToken: string;
  photos?: any[];
  user?: UserOutput;
  createdAt?: string;
  updatedAt?: string;
};
