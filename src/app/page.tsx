import Image from "next/image";
import logo from "../assets/logo.svg";
import "../styles/fonts.css";
import CardGrid from "@/components/cardGrid";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className=" items-center justify-center flex flex-col">
        <Image src={logo} alt="Log" width={400} height={400} layout="fixed" />
        <div>
          <span
            style={{ fontFamily: "Felfel" }}
            className=" text-black text-7xl text-center mt-10 relative flex font-felfel "
          >
            منصة صحوة
          </span>
        </div>
        <div className="relative bg-yellow-100 rounded-full px-3 py-1 text-2xl mt-10 leading-6 text-gray-600 ring-1 ring-gray-900/10 animate-pulse hover:ring-gray-900/20">
          قريباً
        </div>
        <div>
          <span
            style={{ fontFamily: "Felfel" }}
            className=" text-black text-4xl text-center mt-10 relative flex font-felfel "
          >
            ابني معنا
          </span>
        </div>
        <div className="relative mt-20">
          <CardGrid
            array={[
              {
                name: "فريق المبرمجين",
                type: "developer",
                link: "https://forms.gle/6c1uFs1TkLRuhiz17",
              },
              {
                name: "فريق المصممين",
                type: "designer",
                link: "https://forms.gle/RM7iZeQajg6QGwWo7",
              },
              {
                name: "فريق المعلمين",
                type: "teacher",
                link: "https://forms.gle/L2wj6BQA1yVKZdig8",
              },
              {
                name: "فريق المونتاج",
                type: "film",
                link: "https://forms.gle/PpUDaDaAqgYcsse2A",
              },
            ]}
          />
        </div>
        <Card
          item={{
            name: " باقي الفرق",
            type: "other",
            link: "https://forms.gle/v8WhfK7bHzP6MNjU8",
          }}
        />

        <a
          href="https://www.notion.so/haythamhakim/30c48e986b064e01a8f783ea16730c0d?pvs=4"
          target="_blank"
        >
          <div className="relative bg-red-500 hover:bg-red-700 rounded-full px-3 py-1 text-2xl mt-10 ">
            <span className=" m-5">تعَرف اكثر هنا</span>
          </div>

          <div className="mt-10 ml-10">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=haythamhakim&repo=sahwa&type=star&count=true&size=large"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </a>
      </div>
    </main>
  );
}
