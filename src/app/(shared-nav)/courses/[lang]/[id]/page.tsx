"use client";
import {Course, Subject, SubjectComment} from "@/types/course";
import {useEffect, useState} from "react";
import {FaCheckCircle, FaChevronDown, FaChevronUp, FaQuestion} from "react-icons/fa";
import {CiBank} from "react-icons/ci";
import {getCourseByIdAndLang} from "@/api-mock/CourseService";
import {v4 as uuidv4} from "uuid";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

interface Props {
    params: { id: number, lang: string };
}

export default function CoursePage({params: {id, lang}}: Props) {

    const [course, setCourse] = useState<Course | null>(null);
    const [currentSubject, setCurrentSubject] = useState<Subject | null>(null);
    const [expandedComment, setExpandedComment] = useState<number | null>(null);
    //mock for comment section, to be removed
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


    useEffect(() => {
        const fetchCourse = async () => {
            const courseData = await getCourseByIdAndLang(id, lang);
            if (courseData) {
                setCourse(courseData);
                setCurrentSubject(courseData.subjects[0]);
            }
        };
        fetchCourse();
    }, [id, lang]);

    const toggleSubject = (subject: Subject) => {
        setCurrentSubject(subject);
    };
    const toggleComment = (commentId: number) => {
        setExpandedComment(expandedComment === commentId ? null : commentId);
    };

    if (!course || !currentSubject) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col text-black items-center justify-center md:flex-row  md:flex-row-reverse">
            {/* 2/3 Column in large screens */}
            <div className="flex flex-col w-full md:basis-3/5 md:w-full px-4 ml-4">
                <div className="flex w-full basis-2/3 my-4 items-center border-black rounded-lg border-[3px]">
                    <iframe
                        src={currentSubject.link}
                        height="400"
                        width="100%"
                        allow="fullscreen"/>
                </div>
                <div className="flex flex-col basis-1/3 md:max-h-36 md:overflow-y-scroll">
                    {/*TODO: need to be redesigned, wasnt able to implement a good design for comments section */}
                    {mockComment.map((comment) => (
                        <div key={comment.id} className="mb-4">
                            <div className="flex items-center justify-between p-4 cursor-pointer"
                                 onClick={() => toggleComment(comment.id)}>
                                <div className="flex items-center">
                                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white mx-3"
                                         src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                         alt="" key={uuidv4()}/>

                                    <span className="font-bold">{comment.content}</span>
                                </div>
                                <div className="flex items-center">
                                    {expandedComment === comment.id ? <FaChevronUp/> : <FaChevronDown/>}
                                </div>
                            </div>
                            {expandedComment === comment.id && comment.replies && (
                                <div className="p-4">
                                    {comment.replies.map((reply) => (
                                        <div key={reply.id} className="flex items-center mb-2">
                                            <p className="text-black">{reply.content}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* 1/3 Column in large screens */}
            <div className="flex w-full flex-col md:basis-2/5 md:w-full p-4">
                {/* Course Title Section */}
                <div className="my-2">
                    <h1 className="font-bold text-5xl px-5 pb-3">{course.title}</h1>
                </div>
                {/* Course Summary Section */}
                <div>
                    <div
                        className="flex flex-col text-xl font-bold bg-[#FFDF36] overflow-auto h-60 gap-4 border-black border-[3px] rounded-[4px]">
                        {course.subjects.map((subject, index) => (
                            <div className="flex w-full px-2" key={index}>
                                <button className="flex w-full justify-between text-right"
                                        onClick={() => toggleSubject(subject)}>
                                    <span>{index + 1 + ". " + subject.title}</span>
                                    <FaCheckCircle className="fill-green-500 w-6 h-6"/>
                                </button>
                            </div>
                        ))}
                    </div>
                    {/*
                        TODO: didn't find a use case for it
                        <p className="bg-sahwa-orange font-bold text-base text-center mt-2">اظهر المزيد</p>
                     */}
                </div>
                {/* Course Q/A & Resources Section */}
                <Accordion
                    className="flex flex-col font-normal my-2 pt-5 pb-10 border-black border-[3px] rounded-[4px]">
                    <AccordionItem className="flex flex-col text-xl gap-2 justify-between" key="qa"
                                   aria-label="بنك الأسئلة" indicator={<FaQuestion/>} title="بنك الأسئلة">
                        {course.qa?.map((courseQA, index) => (
                            <div className="flex text-base gap-2" key={index}>
                                <ul>
                                    <li className="font-bold">- {courseQA.question}</li>
                                    <li>{courseQA.answer}</li>
                                </ul>
                            </div>
                        ))}
                    </AccordionItem>
                    <AccordionItem className="flex flex-col text-xl gap-2" key="resources" aria-label="موارد تعليمية"
                                   indicator={<CiBank/>} title="موارد تعليمية">
                        {course.resources?.map((resource, index) => (
                            <a className="flex text-base gap-2" key={index} href={resource.link} target="_blank"
                               title={resource.description}>{resource.title}</a>
                        ))}
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};