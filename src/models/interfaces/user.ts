import { Country } from "../enums/country";
import { PersonalityType } from "../enums/personalityType";
import { Badge } from "./badge";

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
export interface UserOut {
  message: string | null
  status: string | null
  id: number
  first_name: string
  last_name: string
  nationality: string
  email: string
  birth_date: string
  created_on: string
  roles: Role[]
  preferences: Preference[]
  badges: Badge[]
  confirmed: boolean
  coins: number
}
export interface Role {
  message: string | null
  status: string | null
  id: number
  name: string
  description: string
}

export interface Preference {
  message: string | null
  status: string | null
  id: number
  name: string
}



export interface ApiResponse {
  message: string
  status: number
  page_number: number
  page_size: number
  total_pages: number
  total_records: number
  list: User[]
}

export interface UserSummary {
  id: number
  first_name: string
  last_name: string
}