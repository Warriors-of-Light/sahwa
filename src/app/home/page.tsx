"use client";
import Image from "next/image";
import ellipse from "../../assets/Ellipse.svg";
import arabesque from "../../assets/arabesque.svg";
import sahwaLong from "../../assets/sahwaLong.svg";

import Header from "@/components/header";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import "../../styles/fonts.css";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      Icon: FileTextIcon,
      name: "اساسيات البرمجة",
      description:
        "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",
      href: "/",
      cta: "تعلم المزيد",
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: FileTextIcon,
      name: "تطوير تطبيقات جوال",
      description:
        "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",

      href: "/",
      cta: "تعلم المزيد",
      className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "تحليل البيانات",
      description:
        "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",

      href: "/",
      cta: "تعلم المزيد",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "برمجة الالعاب",
      description:
        "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",

      href: "/",
      cta: "تعلم المزيد",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "تطوير تطبيقات جوال",
      description:
        "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",

      href: "/",
      cta: "تعلم المزيد",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "الذكاء الاصطناعي",
      description:
        "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",
      href: "/",
      cta: "تعلم المزيد",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className=" bg-white z-10 w-full absolute top-0 ">
        <Header displayLogin />
      </div>
      <div>
        <Image
          className="absolute -top-0 left-0"
          src={ellipse}
          alt="ellipse"
          width={600}
          height={600}
        />
        <Image
          className="absolute -top-0 left-0"
          src={arabesque}
          alt="ellipse"
          width={600}
          height={600}
        />
      </div>
      <div className="items-center relative  flex flex-col mt-24">
        <span className="  text-7xl text-black" style={{ fontFamily: "Cairo" }}>
          تعليم لغد افضل
        </span>
        <span
          className="  text-2xl text-black mt-7 w-[600px] text-center"
          style={{ fontFamily: "Cairo" }}
        >
          منصة تعليمية عربية مفتوحة للنهضة العلمية للأمة العربية من خلال دورات
          ومسارات تعليمية مجانية
        </span>
      </div>
      <div className="w-screen flex">
        <span
          className="text-black text-2xl mt-2 ml-auto mr-10 mb-10"
          style={{ fontFamily: "Cairo" }}
        >
          المسارات التعليمية
        </span>
      </div>
      <BentoGrid className="lg:grid-rows-4">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      <div className="min-w-screen justify-center">
        <Image src={sahwaLong} alt="long sahwa" />
      </div>
    </main>
  );
}
