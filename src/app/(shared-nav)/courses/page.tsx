"use client"
import { languages } from "@/enums/language.enum";
import { levels } from "@/enums/level.enum";
import { CourseCard } from "@/components/courseCard";
import { courseDetails } from "@/types/courseDetails.type";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import {v4 as uuidv4} from "uuid";

export default function Courses(){
    const [searchText, setSearchText] = useState<String>("");
    const [courses, setCourses] = useState<courseDetails[]>(DATA);
    const handleSearch = (event: ChangeEvent<HTMLInputElement>)=>{
        setSearchText(event.target.value.trim());
    }
    useEffect(()=>{
        if(searchText)
            setCourses(DATA.filter(course=> course.title.includes(searchText as string)))
        else{
            setSearchText("");
            setCourses(DATA);
        }
    }, [searchText]);
    const handleSuggestion = useCallback((title: string)=>{
        setSearchText(title);
    }, []);
    return <div className="text-black w-screen flex-1 flex justify-start items-center flex-col gap-10 pt-10">
        {/* search input */}
        <div className="p-2 border-[2px] border-black rounded-lg flex justify-center items-center gap-3 w-[340px]">
            <input placeholder="برمجة"
                   type="text"
                   className="text-center text-black font-bold placeholder-black focus:outline-none"
                   onChange={handleSearch}
                   value={searchText as string}
            />
            <IoSearch className="w-[25px] h-[25px] font-bold"/>
        </div>
        {/* best keywords */}
        <div className="flex flex-col gap-5 items-end">
            <p>متداول الان</p>
            <div className="flex gap-3">
                {SUGGESTIONS.map((suggestion)=><button onClick={()=>handleSuggestion(suggestion)} className="border border-black py-2 px-4 font-bold bg-[#FF0000] text-white rounded-md" key={uuidv4()}>{suggestion}</button>)}
            </div>
        </div>
        <div></div>
        {/* list of courses */}
        <div className="flex justify-center items-center gap-5 flex-wrap">
            {courses.map((data)=><CourseCard data={data} key={uuidv4()}/>)} 
        </div>
        <button className="px-4 py-2 border border-black rounded-md bg-[#FFDF36]">اظهر المزيد</button>
    </div>;
}

const DATA: courseDetails[] =[{
    id: 1,
    title: "تعلم الآلة",
    level: levels.Hard,
    description: "تقنيات في تعلم الالة بلغة بايثون من خلال ٨ فيديو تعليمية من عمر الصواني",
    rating: 3,
    nbrOfRaters: 100,
    currentStudents: 100,
    instructor: {
        id: 1,
        firstName: "عمر",
        lastName: "الصواني",
        email: ""
    },
    languages: [languages.ARABIC, languages.ENGLISH],
    reviews: []
},{
    id: 2,
    title: "الخوارزميات",
    level: levels.Medium,
    description: "تعلم اهم الخوارزميات في البرمجة من خلال ٦ فيديو تعليمية من اشرف عدنان",
    rating: 4,
    nbrOfRaters: 300,
    currentStudents: 200,
    instructor: {
        id: 2,
        firstName: "اشرف",
        lastName: "عدنان",
        email: ""
    },
    languages: [languages.ARABIC],
    reviews: []
},{
    id: 3,
    title: "اساسيات البرمجة",
    level: levels.Easy,
    description: "تعلم اساسيات البرمجة من الصفر بلغة بايثون من خلال ١٢ فيديو تعليمية من اسامة الزيرو",
    rating: 5,
    nbrOfRaters: 500,
    currentStudents: 300,
    instructor: {
        id: 2,
        firstName: "اسامة",
        lastName: "الزيرو",
        email: ""
    },
    languages: [languages.ENGLISH],
    reviews: []
}];

const SUGGESTIONS = ["تعلم الآلة", "الخوارزميات", "اساسيات البرمجة"];