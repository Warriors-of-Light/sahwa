import { User } from "firebase/auth";
import { countries } from "./constants";
import { IUser } from "./models";

export type SahwaUser = Partial<User> & Partial<IUser>;
export type Country = keyof typeof countries;
export type Role = "admin" | "instructor" | "student" | "TA";
