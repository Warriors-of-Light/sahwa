import logo from "@/assets/footer/logo.png"
import fb from "@/assets/footer/fb.svg";
import ig from "@/assets/footer/ig.svg";
import li from "@/assets/footer/li.svg";
import Image from "next/image"
export const Footer = ()=>{
    return <div className="w-full py-6 px-10 flex justify-between items-center bg-[#DB1B24] text-[#FCB351] font-cairo">
        <Image src={logo} alt="logo" className="w-[50px] h-[30px]"/>
        <span>كل الحقوق محفوظة @2024</span>
        <div className="flex justify-between items-center gap-3">
            <Image src={fb} alt="fb logo"/>
            <Image src={ig} alt="ig logo"/>
            <Image src={li} alt="li logo"/>
        </div>
    </div>
}