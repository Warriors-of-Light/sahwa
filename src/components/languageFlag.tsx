import { FC ,ComponentType} from "react";
import FlagAR from "@/assets/flag_ar.svg";
import FlagEN from "@/assets/flag_en.svg";
import { languages } from "@/enums/language.enum";
import Image from "next/image";
interface LanguagePropos{
    language: languages
}
export const LanguageFlag:FC<LanguagePropos>= ({language})=>{
    switch(language){
        case languages.ARABIC:
            return <Image src={FlagAR} alt="flag" className="w-[30px] h-[30px]"/>
        case languages.ENGLISH:
            return <Image src={FlagEN} alt="flag" className="w-[30px] h-[30px]"/>
    }
}