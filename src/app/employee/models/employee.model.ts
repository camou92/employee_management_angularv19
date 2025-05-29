import { Departement } from "./departement.model";
import { Level } from "./level.model";

export interface Employee {
  _id: string;
  name: string;
  department: Departement;
  level: Level
}
