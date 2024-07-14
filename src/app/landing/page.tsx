"use client";
import Image from "next/image";
import ellipse from "../../assets/Ellipse.svg";
import arabesque from "../../assets/arabesque.svg";
import joinus from "../../assets/joinus.svg";
import landing1 from "../../assets/landing1.svg";
import landing2 from "../../assets/landing2.svg";
import landing3 from "../../assets/landing3.svg";
import landing4 from "../../assets/landing4.svg";
import landing5 from "../../assets/landing5.svg";

import sahwaLong from "../../assets/sahwaLong.svg";

import Header from "@/components/header";
import { useRouter } from "next/navigation";
import "../../styles/fonts.css";

export default function Landing() {
  const router = useRouter();

  // const features = [
  //   {
  //     Icon: FileTextIcon,
  //     name: "اساسيات البرمجة",
  //     description:
  //       "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",
  //     href: "/",
  //     cta: "تعلم المزيد",
  //     className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  //   },
  //   {
  //     Icon: FileTextIcon,
  //     name: "تطوير تطبيقات جوال",
  //     description:
  //       "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",

  //     href: "/",
  //     cta: "تعلم المزيد",
  //     className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  //   },
  //   {
  //     Icon: InputIcon,
  //     name: "تحليل البيانات",
  //     description:
  //       "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",

  //     href: "/",
  //     cta: "تعلم المزيد",
  //     background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //     className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  //   },
  //   {
  //     Icon: GlobeIcon,
  //     name: "برمجة الالعاب",
  //     description:
  //       "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",

  //     href: "/",
  //     cta: "تعلم المزيد",
  //     background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //     className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  //   },
  //   {
  //     Icon: CalendarIcon,
  //     name: "تطوير تطبيقات جوال",
  //     description:
  //       "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",

  //     href: "/",
  //     cta: "تعلم المزيد",
  //     background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  //   },
  //   {
  //     Icon: BellIcon,
  //     name: "الذكاء الاصطناعي",
  //     description:
  //       "يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى بالاضافة على هذه. إضافة إلى زيادة عدد الحروف التى تولدها",
  //     href: "/",
  //     cta: "تعلم المزيد",
  //     background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //     className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  //   },
  // ];

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
          width={500}
          height={500}
        />
        <Image
          className="absolute -top-0 left-0"
          src={arabesque}
          alt="ellipse"
          width={600}
          height={600}
        />
      </div>
      <div className="items-center relative text-center flex flex-col mt-24 lg:w-[600px]">
        <span
          className=" text-5xl lg:text-8xl lg:text-black lg:bg-transparent text-white bg-black p-5 rounded-md"
          style={{ fontFamily: "ghaith" }}
        >
          تعليم لغد افضل
        </span>
        <span
          className="  text-2xl lg:text-black lg:bg-transparent mt-3 mb-5  text-center text-white bg-black p-5 rounded-md"
          style={{ fontFamily: "Cairo" }}
        >
          منصة تعليمية عربية مفتوحة للنهضة العلمية للأمة العربية من خلال دورات
          ومسارات تعليمية مجانية
        </span>
      </div>
      <div className="z-10">
        <Image src={joinus} alt="join us" />
      </div>

      <div className="w-screen flex mt-40 h-96 p-2">
        <div className="w-full flex flex-col text-right items-start">
          <span
            className="text-black text-7xl ml-auto mr-5 mb-10 z-10"
            style={{ fontFamily: "Ghaith" }}
          >
            فشل الطرق التعليمية التقليدية
          </span>
          <span
            className="text-black text-right text-lg lg:text-2xl ml-auto mr-5 mb-10 z-10 sm:w-[600px]"
            style={{ fontFamily: "Cairo" }}
          >
            مسارات تعليمية متكاملة, الى فريقنا وسيتم الرد عليك في اقرب وقت قم
            بإرسال الاستفسارات والاقتراحات والملاحظات الى فريقنا وسيتم الرد عليك
            في اقرب وقت
          </span>
          <Image
            src={landing1}
            className="relative lg:-top-52 lg:-left-40 "
            alt="group of students getting out of school without creativity"
          />
        </div>
      </div>
      <div className="w-screen flex mt-80 p-2">
        <div className="w-full flex flex-col text-right items-start">
          <span
            className="text-black text-7xl ml-auto mr-5 mb-10 z-10"
            style={{ fontFamily: "Ghaith" }}
          >
            لقد حان وقت الصحوة
          </span>
          <span
            className="text-black text-right text-lg lg:text-2xl ml-auto mr-5 mb-10 z-10 sm:w-[600px]"
            style={{ fontFamily: "Cairo" }}
          >
            مسارات تعليمية متكاملة, الى فريقنا وسيتم الرد عليك في اقرب وقت قم
            بإرسال الاستفسارات والاقتراحات والملاحظات الى فريقنا وسيتم الرد عليك
            في اقرب وقت
          </span>
          <Image
            src={landing2}
            className="relative lg:-top-52  "
            alt="group of students getting out of school without creativity"
          />
        </div>
      </div>
      <div className="w-screen flex p-2 lg:-mt-80 -mt-20">
        <div className="w-full flex flex-col text-right items-start">
          <span
            className="text-black text-7xl ml-auto mr-5 mb-10 z-10"
            style={{ fontFamily: "Ghaith" }}
          >
            مسارات تعليمية متكاملة
          </span>
          <span
            className="text-black text-right text-lg lg:text-2xl ml-auto mr-5 mb-10 z-10 sm:w-[600px]"
            style={{ fontFamily: "Cairo" }}
          >
            مسارات تعليمية متكاملة, الى فريقنا وسيتم الرد عليك في اقرب وقت قم
            بإرسال الاستفسارات والاقتراحات والملاحظات الى فريقنا وسيتم الرد عليك
            في اقرب وقت
          </span>
          <Image
            src={landing3}
            className="relative lg:-top-52 lg:left-40 left-24"
            alt="group of students getting out of school without creativity"
          />
        </div>
      </div>
      <div className="w-screen flex p-2">
        <div className="w-full flex flex-col md:flex-row md:text-right md:items-start text-center items-center p-10">
          <div className="flex flex-col sm:w-full">
            <span
              className="text-black text-7xl ml-auto mb-10 z-10"
              style={{ fontFamily: "Ghaith" }}
            >
              انضم لمجتمع صحوة
            </span>
            <span
              className="text-black text-right text-lg lg:text-2xl ml-auto mb-10 z-10"
              style={{ fontFamily: "Cairo" }}
            >
              مسارات تعليمية متكاملة, الى فريقنا وسيتم الرد عليك في اقرب وقت قم
              بإرسال الاستفسارات والاقتراحات والملاحظات الى فريقنا وسيتم الرد
              عليك في اقرب وقت
            </span>
          </div>
          <Image
            src={landing4}
            className="relative lg:-top-52 lg:-right-20"
            alt="group of students getting out of school without creativity"
          />
        </div>
      </div>
      <div className="w-screen flex -mt-52 lg:-mt-[620px] p-20">
        <div className="w-full flex flex-col text-right items-start">
          <span
            className="text-black text-7xl ml-auto mr-5 mb-10 z-10"
            style={{ fontFamily: "Ghaith" }}
          >
            لقد حان وقت الصحوة
          </span>
          <span
            className="text-black text-right text-lg lg:text-2xl ml-auto mr-5 mb-10 z-10 sm:w-[600px]"
            style={{ fontFamily: "Cairo" }}
          >
            مسارات تعليمية متكاملة, الى فريقنا وسيتم الرد عليك في اقرب وقت قم
            بإرسال الاستفسارات والاقتراحات والملاحظات الى فريقنا وسيتم الرد عليك
            في اقرب وقت
          </span>
          <Image
            src={landing5}
            className="relative lg:-top-52  lg:left-20"
            alt="group of students getting out of school without creativity"
          />
        </div>
      </div>
      {/* <div className="w-screen flex">
        <span
          className="text-black text-2xl lg:mt-2 mt-8 ml-auto mr-10 mb-10 "
          style={{ fontFamily: "Cairo" }}
        >
          المسارات التعليمية
        </span>
      </div>
      <BentoGrid className="lg:grid-rows-4">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid> */}
      <div className="min-w-screen justify-center lg:mt-0 mt-10">
        <Image src={sahwaLong} alt="long sahwa" />
      </div>
    </main>
  );
}
