import { User } from "src/users/interfaces/user.interface";

export interface Student {
  id: string;           // Mismo ID que el usuario (relación 1:1)
  anio_ingreso: number; // año_ingreso
  user?: User;          // Relación con User (opcional)
}