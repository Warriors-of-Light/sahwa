"use client"
import CourseBG from "@/assets/home/image.png";
import Image from "next/image";
import rocket from "@/assets/home/rocket.png";
import Avatar from "@/assets/home/userAvatar.png";
export default function Test(){
    return <div className="bg-[#F7F5E8] rounded-[25px] border p-5 w-fit flex justify-center items-center gap-5 flex-col">
        <div className="relative w-fit">
            {/* progress bar of started courses */}
            <div className="absolute top-4 left-[5px] flex justify-center items-center gap-4 w-full px-2" style={{width: "calc(100% - 15px)"}}>
                <div className="bg-[#DBDEE1] p-1 rounded-[40px] w-full flex justify-between items-center">
                    <div className="p-2 rounded-[40px] bg-gradient-to-r from-[#FF5C00] to-[#E83526] w-[20%]">
                        <Image src={rocket} alt="rocket icon" className="w-[20px] h-[20px]"/>
                    </div>
                    <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.2812 1.42751c-1.316-1.37145-3.5091-1.37144-4.8251 0l-.5626.58628c-.8194.85393-2.0292 1.21108-3.181.93909l-.7819-.18466c-1.84196-.43494-3.67739.74421-4.0475 2.60023l-.1727.8661c-.22934 1.15013-1.0445 2.09602-2.14816 2.49268l-.81534.29303c-1.76702.63507-2.66476 2.60034-1.98795 4.35174l.33607.8697c.41956 1.0857.24428 2.3115-.46274 3.2361l-.56341.7369c-1.13797 1.4882-.83125 3.6209.67998 4.7281l.72841.5337c.94157.6898 1.45523 1.8208 1.35518 2.9837l-.0785.9125c-.16156 1.8778 1.26014 3.5181 3.14192 3.6248l.828.047c1.17693.0667 2.23174.7483 2.77624 1.7939l.3901.7491c.8769 1.6839 2.9782 2.3006 4.626 1.3578l.692-.3959c1.0287-.5886 2.2921-.5886 3.3209 0l.6919.3959c1.6479.9428 3.7492.3261 4.6261-1.3578l.3901-.7491c.5444-1.0456 1.5993-1.7272 2.7762-1.7939l.828-.047c1.8818-.1067 3.3035-1.747 3.1419-3.6248l-.0785-.9125c-.1-1.1629.4136-2.2939 1.3552-2.9837l.7284-.5337c1.5112-1.1072 1.8179-3.2399.68-4.7281l-.5634-.7368c-.7071-.9247-.8823-2.1505-.4628-3.2362l.3361-.8697c.6768-1.7514-.2209-3.71666-1.9879-4.35173l-.8154-.29304c-1.1037-.39666-1.9188-1.34255-2.1482-2.49268l-.1727-.8661c-.3701-1.85602-2.2055-3.03517-4.0474-2.60023l-.782.18466c-1.1518.27199-2.3616-.08516-3.181-.93909l-.5625-.58628ZM12.897 18.1395c-.4695-.4794-1.2306-.4794-1.7 0-.4694.4793-.4694 1.2565 0 1.7358l3.251 3.3197c.1673.1709.3718.2809.5868.3299.4293.1674.9335.0744 1.2795-.2788l7.7379-7.9015c.4694-.4794.4694-1.2565 0-1.7359-.4694-.4793-1.2305-.4793-1.6999 0l-6.9462 7.093-2.5091-2.5622Zm4.999 12.7507c7.1151 0 12.883-5.8293 12.883-13.0202 0-7.1909-5.7679-13.02033-12.883-13.02033-7.1151 0-12.88302 5.82943-12.88302 13.02033 0 7.1909 5.76792 13.0202 12.88302 13.0202Zm0-2.604c-5.6921 0-10.30642-4.6635-10.30642-10.4162 0-5.7528 4.61432-10.41627 10.30642-10.41627 5.6921 0 10.3064 4.66347 10.3064 10.41627 0 5.7527-4.6143 10.4162-10.3064 10.4162Z" fill="#000" fill-opacity=".1"/></svg>
                </div>
                <Image src={Avatar} alt="user avatar" className="w-[40px] h-[40px] rounded-[50%]"/>
            </div>
            <Image src={CourseBG} alt="backgorund image for the course" className="w-[459px] h-[233px] rounded-[20px]"/>
        </div>
        <p className="text-right flex flex-col font-cairo">
            <span className="text-[32px] font-bold">تعلم الآلة تعلم الآلة تعلم الآلة</span>
            <span className="opacity-[50%] text-[18px]">تقنيات في تعلم الالة بلغة بايثون, من خلال ٨ فيديو تعليمية من عمر الصواني</span>
        </p>
        <button className="p-4 rounded-[30px] w-full border-[1.5px] border-[#E83526] text-[#E83526]">عرض الكورس</button>
    </div>
}