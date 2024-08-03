"use strict";
exports.__esModule = true;
exports.defaultFormCourse = exports.CourseSchema = exports.LessonSchema = exports.youtubeLinkRegex = void 0;
var zod_1 = require("zod");
exports.youtubeLinkRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
exports.LessonSchema = zod_1.z.object({
    name: zod_1.z.string(),
    youtube_link: zod_1.z.string()
});
exports.CourseSchema = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: 'أدخل اسم الدورة' })
        .min(5, 'يجب أن يحتوي اسم الدورة على 5 أحرف على الأقل'),
    description: zod_1.z
        .string({ required_error: 'أدخل وصف الدورة' })
        .min(10, 'يجب أن يحتوي وصف الدورة على 10 أحرف على الأقل'),
    cost: zod_1.z
        .number({ required_error: 'يجب على ثمن الدروة ان يتكون من أرقام' })
        .nullable()
        .refine(function (val) { return val === null || val >= 0; }, 'ثمن الدورة يجب أن يكون رقما موجبا'),
    coins_to_win: zod_1.z
        .number({ required_error: 'يجب على عدد العملات ان يتكون من أرقام' })
        .nullable()
        .refine(function (val) { return val === null || val >= 0; }, 'عدد العملات  يجب أن يكون رقما موجبا'),
    thumbnail: zod_1.z.string(),
    instructor_id: zod_1.z.number().positive('يجب ادخل المدرس'),
    tags_ids: zod_1.z.array(zod_1.z.number().nonnegative()),
    badges_ids: zod_1.z.array(zod_1.z.number().nonnegative()),
    lessons: zod_1.z.array(exports.LessonSchema)
});
exports.defaultFormCourse = {
    cost: undefined,
    badges_ids: [],
    coins_to_win: undefined,
    description: '',
    instructor_id: undefined,
    lessons: [],
    name: '',
    tags_ids: [],
    thumbnail: ''
};
