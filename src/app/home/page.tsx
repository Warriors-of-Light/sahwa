"use client";

import Header from "@/components/header";
import { useUserStore } from "@/store/useUserStore";
import { DateTime } from "luxon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, CartesianGrid, XAxis, Line, YAxis } from "recharts"
import { StartedCourse } from "@/components/home/StartedCourse";
import { SuggestedCourse } from "@/components/home/SuggestedCourse";
import { ContinueCourse } from "@/components/home/ContinueCourse";
import avatar from "@/assets/home/userAvatar.png"

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

  const chartConfig = {
    hours: {
      label: "ساعات",
      color: "hsl(var(--chart-1))",
    },
  }

  const chartData = [
    { month: "جمعة", hours: 2.1 },
    { month: "خميس", hours: 2 },
    { month: "اربعاء", hours: 3.7 },
    { month: "ثلاثاء", hours: 0.7 },
    { month: "اثنين", hours: 3.2 },
    { month: "احد", hours: 1.9 },
    { month: "سبت", hours: 4  }
  ]

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
          src={avatar}
          width={80}
          height={80}
          alt=""
        />
      </div>
      <div className="w-full flex flex-col justify-end text-right -mt-10 ">
          <span
            className="text-black text-xl p-2 mb-5"
            style={{ fontFamily: "cairo" }}
          >
            {" "}
            استكمال
          </span>
          <ContinueCourse />
      </div>
      {/* chart section */}
      <div className="w-full flex-col justify-end text-right p-4 border-t mt-5 gap-5">
          <span
            className="text-black text-xl p-2 mb-5"
            style={{ fontFamily: "cairo" }}
          >
            {" "}
            نشاطك
          </span>
          <ChartContainer config={chartConfig} className="rounded-[20px] w-full h-[300px] bg-[#F7F5E8] px-3 py-6 mt-5">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={true} horizontal={false} strokeWidth={2}/>
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine
                tickMargin={8}
                //tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                dataKey="hours"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                orientation="right"
                scale={"linear"}
                //tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel/>}
              />
              <Line
                dataKey="hours"
                type="natural"
                stroke="var(--color-hours)"
                strokeWidth={4}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
      </div>
      {/* started courses */}
      <div className="w-full flex-col justify-end text-right p-4 border-t mt-5 gap-5">
      <span
            className="text-black text-xl p-2 mb-5"
            style={{ fontFamily: "cairo" }}
          >
            {" "}
            الكورسات المسجلة 
          </span>
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="w-fit flex justify-center items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-gradient-to-r from-[#FF5C00] to-[#E83526] text-center leading-[40px] text-white text-[18px] font-semibold">
                {"<"}
              </div>
              <div className="w-[40px] h-[40px] rounded-[50%] border border-[#E83526] text-center leading-[40px] text-[#E83526] text-[18px] font-semibold">
                {">"}
              </div>
            </div>
            <div className="flex items-center gap-3 overflow-x-scroll w-full">
              {[1,2,3,4,5,6].map((i)=><StartedCourse key={i}/>)}
            </div>
          </div>
      </div>
      {/* suggested courses */}
      <div className="w-full flex-col justify-end text-right p-4 border-t mt-5 gap-5">
      <span
            className="text-black text-xl p-2 mb-5"
            style={{ fontFamily: "cairo" }}
          >
            {" "}
            كورسات مقترحة 
          </span>
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="w-fit flex justify-center items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-gradient-to-r from-[#FF5C00] to-[#E83526] text-center leading-[40px] text-white text-[18px] font-semibold">
                {"<"}
              </div>
              <div className="w-[40px] h-[40px] rounded-[50%] border border-[#E83526] text-center leading-[40px] text-[#E83526] text-[18px] font-semibold">
                {">"}
              </div>
            </div>
            <div className="flex items-center gap-3 overflow-x-scroll w-full">
              {[1,2,3,4,5,6].map((i)=><SuggestedCourse key={i}/>)}
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
