import { rolTypes } from "./rolTypes";

export interface Character {
  id: number;
  name: string;
  email: string;
  pwd: string;
  rol?: rolTypes;
  createdAt?: Date; 
}