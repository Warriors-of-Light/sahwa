"use client";
import Image from "next/image";
import logo from "../../assets/logo2.svg";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

import "../../styles/fonts.css";
import { useUserStore } from "@/store/useUserStore";
import firebase_app from "@/firebase/config";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import continueWithGoogleImage from "../../assets/continuewithgoogle.svg";

export default function Login() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  useEffect(() => {
    getAuth(firebase_app);
  }, []);

  const { setUser } = useUserStore();

  // TODO: refactor in a seperate function under firebase/auth
  function continueWithGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log(token);
        const user = result.user;
        setUser(user);
        router.push("/profile");
      })
      .catch((error) => {
        alert("Could not sign in");
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error, errorCode, errorMessage, credential);
      });
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className=" items-center justify-center flex flex-col">
        <Image
          className=""
          src={logo}
          alt="Log"
          width={200}
          height={200}
          layout="fixed"
        />
        <div>
          <span
            style={{ fontFamily: "Felfel" }}
            className=" text-black text-4xl text-center mt-5 relative flex "
          >
            منصة صحوة
          </span>
        </div>
        <div className="flex flex-col mt-10">
          <span
            style={{ fontFamily: "Felfel" }}
            className="text-black text-2xl ml-4 text-right"
          >
            الايميل
          </span>
          <input
            id="email"
            type="email"
            className="ring-2 ring-red-500 rounded-sm w-[250px] h-[30px] text-black p-2"
          />
          <span
            style={{ fontFamily: "Felfel" }}
            className="text-black text-2xl ml-4 mt-4 text-right"
          >
            كلمة السر
          </span>
          <input
            id="email"
            type="password"
            className="ring-2 ring-red-500 rounded-sm w-[250px] h-[30px] text-black p-2"
          />
        </div>
        <div className="mt-4">
          <span
            style={{ fontFamily: "Felfel" }}
            className="text-black text-2xl "
          >
            او
          </span>
        </div>
        <Image
          onClick={continueWithGoogle}
          src={continueWithGoogleImage}
          alt="Continue With Google"
          className=" cursor-pointer"
        />

        <div>
          <a href="/profile">
            <div
              style={{ fontFamily: "Felfel" }}
              className=" bg-yellow-400 w-40 p-2 rounded-full mt-6 text-center align-middle text-black text-3xl hover:bg-yellow-300 cursor-pointer"
            >
              نوّرتنا
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
