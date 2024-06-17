import { coursDetails } from "@/types/coursDetails.type";
import { FC } from "react";
import { FaStar } from "react-icons/fa";
import Flag from "@/assets/flag.svg";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";


export const CoursCard:FC<{data: coursDetails}> = ({data})=>{
    return <div className="w-[400px] h-[300px] border-black rounded-md border-[3px] flex flex-col">
        {/* card title */}
        <div className="bg-[#FFDF36] p-3 flex justify-between flex-row-reverse items-center border-black border-[3px] rounded-[4px] border-t-0 border-r-0 border-l-0 basis-1/6">
            {data.title}
            { data.level === "سهل" && <p className="rounded-xl border border-black py-1 px-2 bg-[#A2FF93]">{data.level}</p>}
            { data.level === "متوسط" && <p className="rounded-xl border border-black py-1 px-2 bg-[#FFEE93]">{data.level}</p>}
            { data.level === "صعب" && <p className="rounded-xl border border-black py-1 px-2 bg-[#FF9393]">{data.level}</p>}
        </div>
        {/* card body */}
        <div className="text-right flex flex-col justify-between basis-2/3 p-3">
            <p>{data.description}</p>
            <div>
                <p className="font-bold text-[30px]">{data.rating}</p>
                <div className="flex justify-between items-center flex-row-reverse">
                    <div className="flex flex-row-reverse items-center gap-2">
                        <div className="flex flex-row-reverse">
                            {Array.from(Array(5)).map((_, i)=>{
                                if(i <= data.rating)
                                    return <FaStar color="#FFDF36" className="w-[30px] h-[30px]"/>;
                                else
                                    return <FaRegStar color="#FFDF36" className="w-[30px] h-[30px]"/>;
                            })}
                        </div>
                        <p>(١٠٠ تقيم)</p>
                    </div>
                    <Image src={Flag} alt="flag" className="w-[30px] h-[30px]"/>
                </div>
            </div>
            <div className="flex flex-row-reverse">
                <div className="flex -space-x-1 overflow-hidden">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                <p>٢٠٠+ ملتحق</p>
            </div>
        </div>
        {/* card footer */}
        <p className="text-right p-3 border-black border-[3px] rounded-[4px] border-b-0 border-r-0 border-l-0 basis-1/6"> مقدم من {data.trainer}</p>
    </div>
}