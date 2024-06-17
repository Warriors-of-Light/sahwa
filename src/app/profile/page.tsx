"use client";
import Image from "next/image";
import avatar from "../../assets/avatar.png";
import "../../styles/fonts.css";
import { useUserStore } from "@/store/useUserStore";
import { useState } from "react";

export default function Profile() {
  const { user } = useUserStore();
  const [users, setUsers] = useState([]);
  const callApi = async () => {
    const res = await fetch("/api/profile", {
      method: "GET",
    });
    const data = await res.json();
    setUsers(data.users);
  };
  return (
    <main className="flex min-h-screen flex-col p-24 bg-white">
      {/* <div className="grid grid-cols-2"> */}
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="flex-col flex justify-center items-end">
            <span className={"text-black text-2xl mt-6"}>الاسم</span>
            <span className={"text-black text-2xl mt-6"}> الاهتمامات</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-col flex items-center relative left-32">
            <Image
              src={user?.photoURL ?? avatar}
              alt="avatar"
              width={100}
              height={100}
              className="rounded-full"
            />
            <span className={"text-black text-2xl mt-6"}>
              {user?.displayName}
            </span>
            <span className={"text-black text-2xl mt-6"}>{user?.email}</span>
            <button
              className="bg-blue-400 w-40 text-black p-1 mt-20 rounded-md"
              onClick={callApi}
            >
              {" "}
              display profile/callapi
            </button>
            {users.map((user, index) => (
              <div key={index}>
                <span className="text-black">{JSON.stringify(user)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
