"use client"
import CourseBG from "@/assets/home/image.png";
import Image from "next/image";
import eye from "@/assets/home/eye.png";
import star from "@/assets/home/star.png";
import badge1 from "@/assets/home/badge1.png";
import badge2 from "@/assets/home/badge2.png";
import badge3 from "@/assets/home/badge3.png";
import Avatar from "@/assets/home/userAvatar.png";
export const SuggestedCourse = ()=>{
    return <div className="bg-[#F7F5E8] rounded-[25px] border p-5 w-fit flex justify-center items-center gap-5 flex-col shrink-0">
        <div className="relative w-full">
            {/* progress bar of started courses */}
            <div className="absolute top-4 left-[5px] flex justify-center items-center gap-4 w-full px-2" style={{width: "calc(100% - 15px)"}}>
                <div className="bg-[#FFFFFF]/20 px-2 py-1 rounded-[40px] flex justify-center items-center w-fit shrink-0">
                    <Image src={badge3} alt="third badge" className="w-[40px] h-[40px]"/>
                    <Image src={badge2} alt="second badge" className="w-[40px] h-[40px]"/>
                    <Image src={badge1} alt="first badge" className="w-[40px] h-[40px]"/>
                    <span className="font-cairo text-[16px] text-white font-bold">تحصل علي</span>
                </div>
                <div className="bg-[#FFFFFF]/20 rounded-[40px] flex justify-between items-center w-fit gap-2 p-3">
                    <span className="font-bold text-[15px] text-white">3.7</span>
                    <Image className="w-[20px] h-[20px]" src={star} alt="star icon"/>
                </div>
                <div className="bg-gradient-to-r from-[#142C87] via-[#170F49] to-[#102269] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center">
                    <Image src={eye} alt="eye icon" className="w-[25px] h-[25px]"/>
                </div>
            </div>
            <Image src={CourseBG} alt="backgorund image for the course" className="w-full h-[233px] rounded-[20px]"/>
        </div>
        <p className="text-right flex flex-col font-cairo">
            <span className="text-[25px] font-bold">تعلم الآلة تعلم الآلة تعلم الآلة</span>
            <span className="opacity-[50%] text-[13px]">تقنيات في تعلم الالة بلغة بايثون, من خلال ٨ فيديو تعليمية من عمر الصواني</span>
        </p>
        <div className="w-full flex justify-between items-center gap-4">
        <div className="rounded-[40px] bg-gradient-to-r from-[#FF5C00] to-[#E83526] flex justify-between items-center p-3 gap-4">
            <div className="rounded-[40px] flex justify-between items-center bg-[#fa6b30] gap-2 p-2">
                <span className="text-white font-cairo">درس</span><span className="text-white font-cairo">x25</span>
                <svg width="19" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47172 19.4722c5.23108 0 9.47168-4.2406 9.47168-9.4717 0-5.23106-4.2406-9.4717-9.47168-9.4717C4.24063.5288 0 4.76945 0 10.0005c0 5.2311 4.24063 9.4717 9.47172 9.4717ZM7.60376 6.57719v7.50001l5.00004-3.75-5.00004-3.75001Z" fill="#fff"/></svg>
            </div>
            <span className="font-cairo font-bold text-white">انضمام للكورس</span>
        </div>
        <div className="bg-[#DBDEE1] p-3 rounded-[40px] w-fit flex -space-x-4 rtl:space-x-reverse">
            <Image className="w-10 h-10 rounded-full" src={Avatar} alt="avatar image"/>
            <Image className="w-10 h-10 rounded-full" src={Avatar} alt="avatar image"/>
            <Image className="w-10 h-10 rounded-full" src={Avatar} alt="avatar image"/>
            <div className="relative">
                <Image className="w-10 h-10 rounded-full" src={Avatar} alt="avatar image"/>
                <div className="absolute top-0 left-0 w-10 h-10 rounded-full  bg-black/50 text-white text-center leading-10 font-light">+99</div>
            </div>
        </div>
        </div>
    </div>
}