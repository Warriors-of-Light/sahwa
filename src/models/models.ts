import { DateTime } from "luxon";
import { Country } from "./types";

export interface IUser {
  name: string;
  id: string;
  country: Country;
  birthdate: string;
  courses: Array<string>;
  dateJoined: string;
  username: string;
  role: "student" | "instructor" | "admin" | "TA";
  bio?: string;
  interests?: Array<string>;
  personalityType: string;
  friends?: Array<string>;
}

export interface IInstructor extends IUser {
  courses: string[]; // course ids
}

export interface ICourse {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  instructorId: string;
  reviews?: IReview[];
  lessons?: ILesson[];
  enrolledStudents?: string[];
}

export interface IQuestion {
  id: string;
  courseId: string;
  userId: string;
  questionText: string;
  date: DateTime;
}

export interface IAnswer {
  id: string;
  questionID: string;
  userId: string;
  AnswerText: string;
  date: DateTime;
}

export interface ILessonComment {
  id: string;
  lessonId: string;
  userId: string;
  commentText: string;
  date: DateTime;
}

export interface IReview {
  id: string;
  courseId: string;
  userId: string;
  rating: number;
  reviewText: string;
  date: DateTime;
}

export interface ILesson {
  id: string;
  courseId: string;
  name: string;
  description: string;
  duration: number;
  order: number;
  videoUrl?: string;
  articleUrl?: string;
  comments?: ILessonComment[];
}
