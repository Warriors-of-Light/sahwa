import {languages} from "@/enums/language.enum";
import {levels} from "@/enums/level.enum";

export interface Course {
    id: number,
    courseId: number, //To be removed when we correctly define the DTO
    lang: languages,
    title: string,
    level: levels,
    description: string,
    rating: number,
    nbrOfRaters: number,
    trainer: string,
    subjects: Subject[],
    qa?: CourseQA[],
    resources?: CourseResource[]
}

export type SubjectComment = {
    id: number,
    userId: number,
    content: string,
    replies?: SubjectComment[];
    createDate?: string
}

export type Subject = {
    id: number,
    title: string,
    link: string,
    type: string
    comments?: SubjectComment[]
}
export type CourseResource = {
    id: number,
    title: string,
    description: string,
    link: string
}
export type CourseQA = {
    id: number,
    question: string,
    answer: string
}
