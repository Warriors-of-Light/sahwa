import { levels } from "@/app/enums/level.enum"
import { instructor } from "./trainer.type"
import { languages } from "@/app/enums/language.enum"

export type coursDetails = {
    id: number,
    title: string,
    level: levels,
    description: string,
    rating: number,
    nbrOfRaters: number,
    instructor: instructor,
    languages: languages[]
}