"use client";

import CourseCard from "@/components/courseCard";
import Header from "@/components/header";
import { useUserStore } from "@/store/useUserStore";
import { DateTime } from "luxon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../../styles/fonts.css";

export default function Home() {
  const router = useRouter();
  const { user } = useUserStore();
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  function isMorning(timezone: string): boolean {
    // Get the current time in the user's timezone
    const currentTime = DateTime.now().setZone(timezone);

    // Define the morning time range (e.g., 6:00 AM to 12:00 PM)
    const morningStart = currentTime.startOf("day").plus({ hours: 6 });
    const morningEnd = currentTime.startOf("day").plus({ hours: 12 });

    // Check if the current time is within the morning range
    return currentTime >= morningStart && currentTime < morningEnd;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-white">
      <div className=" bg-white z-10 w-full absolute top-0 ">
        <Header displayPages={false} />
      </div>
      <div className="flex flex-row justify-end items-center p-20 w-screen">
        <span style={{ fontFamily: "cairo" }} className="text-2xl mr-4">
          !{isMorning(userTimezone) ? "صباح" : "مساء"} الخير، {user?.name}
        </span>
        <Image
          className="rounded-full ring-2 ring-white"
          src={user?.photoURL!}
          width={80}
          height={80}
          alt=""
        />
      </div>
      <div className="w-full flex justify-end text-right -mt-10 border-red-400 border rounded-md bg-red-500 p-4">
        <div className="flex flex-col">
          <span
            className="text-white text-xl p-2 mb-5"
            style={{ fontFamily: "cairo", fontWeight: "bold" }}
          >
            {" "}
            استكمال
          </span>
          <CourseCard
            avatars={[
              user?.photoURL!,
              user?.photoURL!,
              user?.photoURL!,
              user?.photoURL!,
              user?.photoURL!,
            ]}
            course={{
              name: "تطوير تطبيقات الويب",
              description: "تعلم كيف تطور تطبيقات الويب بسهولة",
              enrolledStudents: [],
              id: "12eandsai8DHSA8DJA9IE10E", // this is not a real id and will come from what we store in our database
              instructorId: "12eandsai8DHSA8DJA9IE10E", // not real id
              thumbnail: "/CourseImages/12eandsai8DHSA8DJA9IE10E.jpeg", //not real thumbnail location
            }}
          />
        </div>
      </div>
      +
      <div className="w-full flex justify-end text-right  p-4">
        <div className="flex flex-col">
          <span
            className="text-black text-xl p-2 mb-5"
            style={{ fontFamily: "cairo" }}
          >
            {" "}
            الكورسات المقترحة
          </span>
          <div className="flex flex-row space-x-4">
            <CourseCard
              avatars={[
                user?.photoURL!,
                user?.photoURL!,
                user?.photoURL!,
                user?.photoURL!,
                user?.photoURL!,
              ]}
              course={{
                name: "تطوير تطبيقات الويب",
                description: "تعلم كيف تطور تطبيقات الويب بسهولة",
                enrolledStudents: [],
                id: "12eandsai8DHSA8DJA9IE10E",
                instructorId: "12eandsai8DHSA8DJA9IE10E",
                thumbnail: "/CourseImages/12eandsai8DHSA8DJA9IE10E.jpeg",
              }}
            />
            <CourseCard
              avatars={[
                user?.photoURL!,
                user?.photoURL!,
                user?.photoURL!,
                user?.photoURL!,
                user?.photoURL!,
              ]}
              course={{
                name: "تطوير تطبيقات الويب",
                description: "تعلم كيف تطور تطبيقات الويب بسهولة",
                enrolledStudents: [],
                id: "12eandsai8DHSA8DJA9IE10E",
                instructorId: "12eandsai8DHSA8DJA9IE10E",
                thumbnail: "/CourseImages/12eandsai8DHSA8DJA9IE10E.jpeg",
              }}
            />
            <CourseCard
              avatars={[
                user?.photoURL!,
                user?.photoURL!,
                user?.photoURL!,
                user?.photoURL!,
                user?.photoURL!,
              ]}
              course={{
                name: "تطوير تطبيقات الويب",
                description: "تعلم كيف تطور تطبيقات الويب بسهولة",
                enrolledStudents: [],
                id: "12eandsai8DHSA8DJA9IE10E", // this is not a real id and will come from what we store in our database
                instructorId: "12eandsai8DHSA8DJA9IE10E", // not real id
                thumbnail: "/CourseImages/12eandsai8DHSA8DJA9IE10E.jpeg", //not real thumbnail location
              }}
            />
          </div>
        </div>
      </div>
      <div className="rounded-full ring-2 ring-red-500 hover:bg-red-500 hover:text-white text-red-500 w-32 p-3 text-center cursor-pointer">
        <span
          className="text-md font-semibold  "
          style={{ fontFamily: "Ghaith" }}
        >
          {"اظهر المزيد"}
        </span>
      </div>
    </main>
  );
}
