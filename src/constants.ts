import { User } from "firebase/auth";

export interface IUser {
  firstName: string;
  lastName: string;
  bio?: string;
  interests?: [];
}

export type SahwaUser = Partial<User> & Partial<IUser>;
