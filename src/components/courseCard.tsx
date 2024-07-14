"use client";

import { ICourse } from "@/models/models";
import { useUserStore } from "@/store/useUserStore";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CourseImageUrl from "../assets/coursePlaceholder.png";
import GroupAvatars from "./groupAvatars";
import Spinner from "./spinner";

interface ICommunityCard {
  course: ICourse;
  docSnap?: DocumentSnapshot<DocumentData, DocumentData>;
  avatars: string[];
}

export default function CourseCard({
  course,
  docSnap,
  avatars,
}: ICommunityCard) {
  const { name, description, enrolledStudents, id } = course;
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useUserStore();
  const [isMember, setIsMember] = useState(
    enrolledStudents?.some((student) => student === user?.uid)
  );

  return (
    <div className="w-[400px] h-[400px] bg-white rounded-lg border-2">
      <div>
        {loading ? (
          <div className="w-full justify-center flex mt-10 mb-10">
            <Spinner />
          </div>
        ) : (
          <Image
            src={CourseImageUrl}
            alt="community image"
            className="rounded-t-lg"
            height={100}
            objectFit="cover"
            width={400}
          />
        )}
      </div>
      <div className="p-2">
        <div>
          <span
            className="text-2xl text-black font-semibold"
            style={{ fontFamily: "cairo" }}
          >
            {name}
          </span>
        </div>
        <div>
          <span className="text-xl text-black" style={{ fontFamily: "cairo" }}>
            {description}
          </span>
        </div>
      </div>
      <div className=" flex p-4 align-center justify-between ">
        <div className="flex justify-start">
          <GroupAvatars avatars={avatars} />
        </div>
        <div className="flex justify-end">
          <div className="rounded-full bg-gradient-to-r from-red-400 to-red-500 w-32 p-3 text-center drop-shadow-md cursor-pointer">
            <span className="text-md font-semibold text-white">
              {" "}
              {isMember ? "تم الانضمام" : "انضم"}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
