import Image from "next/image";
import logo from "../assets/logo2.svg";
import "../styles/fonts.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className=" items-center justify-center flex flex-col">
        <Image
          className=" animate-pulse"
          src={logo}
          alt="Log"
          width={400}
          height={400}
          layout="fixed"
        />
        <div>
          <span
            style={{ fontFamily: "Felfel" }}
            className=" text-black text-7xl text-center mt-10 relative flex "
          >
            منصة صحوة
          </span>
        </div>
        <div>
          <span
            style={{ fontFamily: "Felfel" }}
            className="text-black text-2xl text-center mt-2 relative flex "
          >
            اول منصة تعليمية تفاعلية مفتوحة مبنية بأيدي عربية
          </span>
        </div>

        <div className="relative bg-yellow-100 rounded-full px-3 py-1 text-2xl mt-10 leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          قريباً
        </div>

        <div className="mt-10 ml-10">
          <iframe
            src="https://ghbtns.com/github-btn.html?user=Warriors-of-Light&repo=sahwa&type=star&count=true&size=large"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
