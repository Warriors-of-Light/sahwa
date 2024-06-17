import { user } from "./user.type";

export type review = {
    rating: number,
    feedback: string,
    user: user,
    datetime: Date,
}