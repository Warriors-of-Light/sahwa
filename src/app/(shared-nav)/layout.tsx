import Image from "next/image";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo2.svg";

export default function RootLayout({children}:any){
    return <div className="bg-white h-screen w-screen flex flex-col">
        <nav className="text-black flex justify-between items-center p-3 shadow-lg">
            <Image src={logo} className="h-[30px] w-[30px]" alt="logo"/>
            <Image src={avatar} className="h-[30px] w-[30px]" alt="avatar"/>
        </nav>
        {children}
    </div>;
}