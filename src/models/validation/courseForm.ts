import { z } from 'zod'


export const youtubeLinkRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/
export const LessonSchema = z.object({
  name: z.string(),
  youtube_link: z.string(),
})

export const CourseSchema = z.object({
  name: z
    .string({ required_error: 'أدخل اسم الدورة' })
    .min(5, 'يجب أن يحتوي اسم الدورة على 5 أحرف على الأقل'),
  description: z
    .string({ required_error: 'أدخل وصف الدورة' })
    .min(10, 'يجب أن يحتوي وصف الدورة على 10 أحرف على الأقل'),
  cost: z
    .number({ required_error: 'يجب على ثمن الدروة ان يتكون من أرقام' })
    .nullable()
    .refine(
      (val) => val === null || val >= 0,
      'ثمن الدورة يجب أن يكون رقما موجبا'
    ),
  coins_to_win: z
    .number({ required_error: 'يجب على عدد العملات ان يتكون من أرقام' })
    .nullable()
    .refine(
      (val) => val === null || val >= 0,
      'عدد العملات  يجب أن يكون رقما موجبا'
    ),
  thumbnail: z.string(),
  instructor_id: z.number().positive('يجب ادخل المدرس'),
  tags_ids: z.array(z.number().nonnegative()),
  badges_ids: z.array(z.number().nonnegative()),
  lessons: z.array(LessonSchema),
})
export const defaultFormCourse = {
  cost: undefined,
  badges_ids: [],
  coins_to_win: undefined,
  description: '',
  instructor_id: undefined,
  lessons: [],
  name: '',
  tags_ids: [],
  thumbnail: '',
}

export type CourseSchemaType = z.infer<typeof CourseSchema>
