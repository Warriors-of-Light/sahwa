import { inherits } from "util";
import { Country } from "../enums/country";
import { PersonalityType } from "../enums/personalityType";
import { Badge } from "./badge";
import { BaseResponse } from "./baseResponse";
import { Tag } from "./tag";

export interface User {
  name: string;
  username: string;
  country: Country;
  personality_type: PersonalityType;
  email: string;
  bio: string;
  birth_date?: string;
  password: string;
  confirm_password: string;
  roles_ids: number[];
  interests_ids: number[];
}
export interface UserOut extends BaseResponse  {
  id: number
  first_name: string
  last_name: string
  nationality: string
  email: string
  birth_date: string
  created_on: string
  roles: Role[]
  preferences: Tag[]
  badges: Badge[]
  confirmed: boolean
  coins: number
}

// move role to another file
export interface Role {
  message: string | null
  status: string | null
  id: number
  name: string
  description: string
}