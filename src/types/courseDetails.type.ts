import { levels } from "@/enums/level.enum"
import { languages } from "@/enums/language.enum"
import { review } from "./review.type"
import { instructor } from "./trainer.type"

export type courseDetails = {
    id: number,
    title: string,
    level: levels,
    description: string,
    rating: number,
    nbrOfRaters: number,
    currentStudents: number,
    instructor: instructor,
    languages: languages[],
    reviews: review[],
}