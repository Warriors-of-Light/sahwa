import { courseDetails } from "@/types/courseDetails.type";
import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import {ColorPalettes} from "@/utils/ColorPalettes";
import { LanguageFlag } from "./languageFlag";

interface ICourseCard{
    data: courseDetails
}

export const CourseCard:FC<ICourseCard> = ({data})=>{
    return <div className="w-[400px] h-[300px] border-black rounded-md border-[3px] flex flex-col">
        {/* card title */}
        <div className="bg-[#FFDF36] p-3 flex justify-between flex-row-reverse items-center border-black border-[3px] rounded-[4px] border-t-0 border-r-0 border-l-0 basis-1/6">
            {data.title}
            { data.level === "سهل" && <p className={`rounded-xl border border-black py-1 px-2 ${ColorPalettes.EASY}`}>{data.level}</p>}
            { data.level === "متوسط" && <p className={`rounded-xl border border-black py-1 px-2 ${ColorPalettes.MEDIUM}`}>{data.level}</p>}
            { data.level === "صعب" && <p className={`rounded-xl border border-black py-1 px-2 ${ColorPalettes.HARD}`}>{data.level}</p>}
        </div>
        {/* card body */}
        <div className="text-right flex flex-col justify-between basis-2/3 p-3">
            <p>{data.description}</p>
            <div>
                <p className="font-bold text-[30px]">{data.rating.toLocaleString("ar-u-nu-arab")}</p>
                <div className="flex justify-between items-center flex-row-reverse">
                    <div className="flex flex-row-reverse items-center gap-2">
                        <div className="flex flex-row-reverse">
                            {Array.from(Array(5)).map((_, i)=>{
                                if(i+1 <= data.rating)
                                    return <FaStar color="#FFDF36" className="w-[30px] h-[30px]" key={uuidv4()}/>;
                                else
                                    return <FaRegStar color="#FFDF36" className="w-[30px] h-[30px]" key={uuidv4()}/>;
                            })}
                        </div>
                        <p>({data.nbrOfRaters.toLocaleString("ar-u-nu-arab")} تقيم)</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        {data.languages.map((lang)=>{
                            return <LanguageFlag language={lang} key={uuidv4()}/>
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse">
                <div className="flex -space-x-1 overflow-hidden">
                    {/* 
                        we can use data.reviews and iterate of the available reviews
                        but for now i will keep this solution using a fixed array
                        until we see how we going to treat the review of a course
                     */}
                    {Array.from(Array(4)).map(()=><img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" key={uuidv4()}/>)}
                </div>
                <p>{data.currentStudents.toLocaleString("ar-u-nu-arab")}+ ملتحق</p>
            </div>
        </div>
        {/* card footer */}
        <p className="text-right p-3 border-black border-[3px] rounded-[4px] border-b-0 border-r-0 border-l-0 basis-1/6"> مقدم من {data.instructor.firstName} {data.instructor.lastName}</p>
    </div>
}