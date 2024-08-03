import { Country } from "../enums/country";
import { PersonalityType } from "../enums/personalityType";

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