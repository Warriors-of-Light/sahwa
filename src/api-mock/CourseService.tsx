import {Course, SubjectComment} from "@/types/course";
import {languages} from "@/enums/language.enum";
import {levels} from "@/enums/level.enum";

const mockComment: SubjectComment[] = [
    {
        id: 1,
        userId: 1,
        content: "يعني ايه الكلمة اللي قالها في @٤:٤٤؟",
        replies: [
            {id: 21, userId: 2, content: "إنه يتحدث عن int"},
            {id: 22, userId: 1, content: "شكراً لك"},
            {id: 23, userId: 3, content: "هل يمكنك توضيح أكثر"}
        ]
    },
    {
        id: 3,
        userId: 2,
        content: "data structures مش فاهم ال",
        replies: [
            {id: 4, userId: 5, content: "مش فاهم ايه ضبط؟"},
            {id: 5, userId: 6, content: "هو بيشرحها افضل في الفيديو اللي جاي"}
        ]
    }
];

const mockCourses: Course[] = [
    {
        id: 1,
        courseId: 1,
        lang: languages.ARABIC,
        title: "تعلم الآلة 1",
        level: levels.Hard,
        description: "تقنيات في تعلم الالة بلغة بايثون من خلال ٨ فيديو تعليمية من عمر الصواني",
        rating: 3,
        nbrOfRaters: 100,
        trainer: " عمر الصواني",
        subjects: [
            {
                id: 1,
                title: "ما هي البرمجة وكيفية تعلم البرمجة؟",
                link: "https://www.youtube.com/embed/9ndH9Qo05F4",
                type: "video",
                comments: mockComment
            },
            {
                id: 2,
                title: "لغات البرمجة والفرق بينها: تعلم البرمجة للمبتدئين",
                link: "https://www.youtube.com/embed/FMSOoWQR92I",
                type: "video"
            },
            {
                id: 3,
                title: "الفرق بين IDE ومحرري النصوص: تعلم البرمجة",
                link: "https://www.youtube.com/embed/3uBCZOGbUIA",
                type: "video"
            },
            {
                id: 4,
                title: "ماهو syntax: تعلم البرمجة من الصفر للمبتدئين",
                link: "https://www.youtube.com/embed/NU_IdBZq1qc",
                type: "video"
            },
            {
                id: 5,
                title: "شرح الفرق بين IDE و Code Editor",
                link: "https://www.youtube.com/embed/a-uNI6ADrL0",
                type: "video"
            },
            {
                id: 6,
                title: "الفرق بين compiler و interpreter",
                link: "https://www.youtube.com/embed/lui_SjvGl2I",
                type: "video" //Enum: video, artice, qcm, exam ...
            },
            {
                id: 7,
                title: "ماهي ال data types - يعني ايه انواع البيانات في البرمجة؟",
                link: "https://www.youtube.com/embed/C6Rl3nGIqIM",
                type: "video" //Enum: video, artice, qcm, exam ...
            },
            {
                id: 8,
                title: "ماهي المتغيرات في البرمجة variables",
                link: "https://www.youtube.com/embed/lox_MKNB1OE",
                type: "video" //Enum: video, artice, qcm, exam ...
            },
            {
                id: 9,
                title: "الجمل الشرطية في البرمجة",
                link: "https://www.youtube.com/embed/YdzcQUbSbQ4",
                type: "video" //Enum: video, artice, qcm, exam ...
            },
            {
                id: 10,
                title: "انتهاء مسار أساسيات البرمجة والحصول على شهادة",
                link: "https://www.youtube.com/embed/BW2S_C5S7_k",
                type: "video" //Enum: video, artice, qcm, exam ...
            }

        ],
        qa: [
            {
                id: 1,
                question: "ما الذي يعنيه int؟",
                answer: "int هو نوع"
            },
            {
                id: 2,
                question: "ما الذي يعنيه long؟",
                answer: "long هو نوع"
            }
        ],
        resources: [
            {
                id: 1,
                title: "تاريخ لغات البرمجة",
                description: "يناقش هذا المقال الأحداث الكبرى في تاريخ لغات البرمجة",
                link: "https://ar.wikipedia.org/wiki/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE_%D9%84%D8%BA%D8%A7%D8%AA_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9",
            },
            {
                id: 2,
                title: "نماذج البرمجة",
                description: "نماذج التصميم (هندسة البرمجيات)",
                link: "https://ar.wikipedia.org/wiki/%D9%86%D9%85%D8%A7%D8%B0%D8%AC_%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85_(%D9%87%D9%86%D8%AF%D8%B3%D8%A9_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A7%D8%AA)"
            }
        ]
    },
    {
        id: 2,
        courseId: 1,
        lang: languages.ENGLISH,
        title: "Machine Learning 2",
        level: levels.Hard,
        description: "Techniques in machine learning with Python through 8 educational videos by Omar Al-Sawani",
        rating: 3,
        nbrOfRaters: 100,
        trainer: "Omar Al-Sawani",
        subjects: [
            {
                id: 1,
                title: "What is programming and how to learn programming?",
                link: "https://www.youtube.com/embed/9ndH9Qo05F4",
                type: "video",
                comments: [
                    {
                        id: 1,
                        userId: 1,
                        content: "What does the word he said at @4:44 mean?"
                    }
                ]
            },
            {
                id: 2,
                title: "Programming languages and their differences: Learning programming for beginners",
                link: "https://www.youtube.com/embed/FMSOoWQR92I",
                type: "video"
            },
            {
                id: 3,
                title: "The difference between IDE and text editors: Learning programming",
                link: "https://www.youtube.com/embed/3uBCZOGbUIA",
                type: "video"
            },
            {
                id: 4,
                title: "What is syntax: Learning programming from scratch for beginners",
                link: "https://www.youtube.com/embed/NU_IdBZq1qc",
                type: "video"
            },
            {
                id: 5,
                title: "Explaining the difference between IDE and Code Editor",
                link: "https://www.youtube.com/embed/a-uNI6ADrL0",
                type: "video"
            },
            {
                id: 6,
                title: "The difference between compiler and interpreter",
                link: "https://www.youtube.com/embed/lui_SjvGl2I",
                type: "video"
            },
            {
                id: 7,
                title: "What are data types - What does data types mean in programming?",
                link: "https://www.youtube.com/embed/C6Rl3nGIqIM",
                type: "video"
            },
            {
                id: 8,
                title: "What are variables in programming?",
                link: "https://www.youtube.com/embed/lox_MKNB1OE",
                type: "video"
            },
            {
                id: 9,
                title: "Conditional statements in programming",
                link: "https://www.youtube.com/embed/YdzcQUbSbQ4",
                type: "video"
            },
            {
                id: 10,
                title: "End of Programming Basics course and obtaining a certificate",
                link: "https://www.youtube.com/embed/BW2S_C5S7_k",
                type: "video"
            }
        ],
        qa: [
            {
                id: 1,
                question: "What does int mean?",
                answer: "int is a type"
            },
            {
                id: 2,
                question: "What does long mean?",
                answer: "long is a type"
            }
        ],
        resources: [
            {
                id: 1,
                title: "History of Programming",
                description: "from documentation of early mechanical computers to modern tools for software development",
                link: "https://en.wikipedia.org/wiki/History_of_programming_languages"
            },
            {
                id: 2,
                title: "Programming paradigm",
                description: "lassification of programming languages",
                link: "https://en.wikipedia.org/wiki/Programming_paradigm"
            }
        ]
    },
    {
        id: 3,
        courseId: 2,
        lang: languages.ARABIC,
        title: "الخوارزميات 3",
        level: levels.Medium,
        description: "تعلم اهم الخوارزميات في البرمجة من خلال ٦ فيديو تعليمية من اشرف عدنان",
        rating: 3,
        nbrOfRaters: 100,
        trainer: "اشرف عدنان",
        subjects: [
            {
                id: 1,
                title: "ما هي البرمجة وكيفية تعلم البرمجة؟",
                link: "https://www.youtube.com/embed/9ndH9Qo05F4",
                type: "video",
                comments: [
                    {
                        id: 1,
                        userId: 1,
                        content: " يعني ايه الكلمة اللي قالها في @٤:٤٤؟"
                    }
                ]
            },
            {
                id: 2,
                title: "لغات البرمجة والفرق بينها: تعلم البرمجة للمبتدئين",
                link: "https://www.youtube.com/embed/FMSOoWQR92I",
                type: "video"
            },
            {
                id: 3,
                title: "الفرق بين IDE ومحرري النصوص: تعلم البرمجة",
                link: "https://www.youtube.com/embed/3uBCZOGbUIA",
                type: "video"
            },
            {
                id: 4,
                title: "ماهو syntax: تعلم البرمجة من الصفر للمبتدئين",
                link: "https://www.youtube.com/embed/NU_IdBZq1qc",
                type: "video"
            },
            {
                id: 5,
                title: "شرح الفرق بين IDE و Code Editor",
                link: "https://www.youtube.com/embed/a-uNI6ADrL0",
                type: "video"
            },
            {
                id: 6,
                title: "الفرق بين compiler و interpreter",
                link: "https://www.youtube.com/embed/lui_SjvGl2I",
                type: "video" //Enum: video, artice, qcm, exam ...
            },
            {
                id: 7,
                title: "ماهي ال data types - يعني ايه انواع البيانات في البرمجة؟",
                link: "https://www.youtube.com/embed/C6Rl3nGIqIM",
                type: "video" //Enum: video, artice, qcm, exam ...
            },
            {
                id: 8,
                title: "ماهي المتغيرات في البرمجة variables",
                link: "https://www.youtube.com/embed/lox_MKNB1OE",
                type: "video" //Enum: video, artice, qcm, exam ...
            },
            {
                id: 9,
                title: "الجمل الشرطية في البرمجة",
                link: "https://www.youtube.com/embed/YdzcQUbSbQ4",
                type: "video" //Enum: video, artice, qcm, exam ...
            },
            {
                id: 10,
                title: "انتهاء مسار أساسيات البرمجة والحصول على شهادة",
                link: "https://www.youtube.com/embed/BW2S_C5S7_k",
                type: "video" //Enum: video, artice, qcm, exam ...
            }

        ],
        qa: [
            {
                id: 1,
                question: "ما الذي يعنيه int؟",
                answer: "int هو نوع"
            },
            {
                id: 2,
                question: "ما الذي يعنيه long؟",
                answer: "long هو نوع"
            }
        ],
        resources: [
            {
                id: 1,
                title: "تاريخ لغات البرمجة",
                description: "يناقش هذا المقال الأحداث الكبرى في تاريخ لغات البرمجة",
                link: "https://ar.wikipedia.org/wiki/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE_%D9%84%D8%BA%D8%A7%D8%AA_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9",
            },
            {
                id: 2,
                title: "نماذج البرمجة",
                description: "نماذج التصميم (هندسة البرمجيات)",
                link: "https://ar.wikipedia.org/wiki/%D9%86%D9%85%D8%A7%D8%B0%D8%AC_%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85_(%D9%87%D9%86%D8%AF%D8%B3%D8%A9_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A7%D8%AA)"
            }
        ]
    },
    {
        id: 4,
        courseId: 3,
        lang: languages.ENGLISH,
        title: "Programming Basics 3",
        level: levels.Easy,
        description: "Techniques in machine learning with Python through 8 educational videos by Omar Al-Sawani",
        rating: 3,
        nbrOfRaters: 100,
        trainer: "Omar Al-Sawani",
        subjects: [
            {
                id: 1,
                title: "What is programming and how to learn programming?",
                link: "https://www.youtube.com/embed/9ndH9Qo05F4",
                type: "video",
                comments: [
                    {
                        id: 1,
                        userId: 1,
                        content: "What does the word he said at @4:44 mean?"
                    }
                ]
            },
            {
                id: 2,
                title: "Programming languages and their differences: Learning programming for beginners",
                link: "https://www.youtube.com/embed/FMSOoWQR92I",
                type: "video"
            },
            {
                id: 3,
                title: "The difference between IDE and text editors: Learning programming",
                link: "https://www.youtube.com/embed/3uBCZOGbUIA",
                type: "video"
            },
            {
                id: 4,
                title: "What is syntax: Learning programming from scratch for beginners",
                link: "https://www.youtube.com/embed/NU_IdBZq1qc",
                type: "video"
            },
            {
                id: 5,
                title: "Explaining the difference between IDE and Code Editor",
                link: "https://www.youtube.com/embed/a-uNI6ADrL0",
                type: "video"
            },
            {
                id: 6,
                title: "The difference between compiler and interpreter",
                link: "https://www.youtube.com/embed/lui_SjvGl2I",
                type: "video"
            },
            {
                id: 7,
                title: "What are data types - What does data types mean in programming?",
                link: "https://www.youtube.com/embed/C6Rl3nGIqIM",
                type: "video"
            },
            {
                id: 8,
                title: "What are variables in programming?",
                link: "https://www.youtube.com/embed/lox_MKNB1OE",
                type: "video"
            },
            {
                id: 9,
                title: "Conditional statements in programming",
                link: "https://www.youtube.com/embed/YdzcQUbSbQ4",
                type: "video"
            },
            {
                id: 10,
                title: "End of Programming Basics course and obtaining a certificate",
                link: "https://www.youtube.com/embed/BW2S_C5S7_k",
                type: "video"
            }
        ],
        qa: [
            {
                id: 1,
                question: "What does int mean?",
                answer: "int is a type"
            },
            {
                id: 2,
                question: "What does long mean?",
                answer: "long is a type"
            }
        ],
        resources: [
            {
                id: 1,
                title: "History of Programming",
                description: "from documentation of early mechanical computers to modern tools for software development",
                link: "https://en.wikipedia.org/wiki/History_of_programming_languages"
            },
            {
                id: 2,
                title: "Programming paradigm",
                description: "lassification of programming languages",
                link: "https://en.wikipedia.org/wiki/Programming_paradigm"
            }
        ]
    }
]


export const getCourseByIdAndLang = async (id: number, lang: string): Promise<Course | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const course = mockCourses.find((course) => course.courseId == id && course.lang == lang);
            resolve(course);
        });
    });
};
