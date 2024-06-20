"use client";
import Image from "next/image";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

import "../../styles/fonts.css";
import { useUserStore } from "@/store/useUserStore";
import firebase_app, { db } from "@/firebase/config";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import continueWithGoogleImage from "../../assets/continuewithgoogle.svg";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Header from "@/components/header";

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
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log(token);
        const user = result.user;
        setUser(user);
        router.push("/profile");

        try {
          const docRef = doc(db, "Users", user.email!);
          const docSnap = await getDoc(docRef);

          if (!docSnap.exists()) {
            await setDoc(docRef, {
              email: user.email,
              name: user.displayName,
              photoURL: user.photoURL,
            });
          }
        } catch (e) {
          console.error("Error adding document: ", e);
        }
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
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className=" bg-white z-10 w-full absolute top-0 ">
        <Header displayLogin={false} />
      </div>
      <div className="items-center relative  flex flex-col mt-24">
        <span className="  text-7xl text-black" style={{ fontFamily: "Cairo" }}>
          اهلا وسهلاً
        </span>
        <span
          className="  text-2xl text-black mt-7 w-[600px] text-center"
          style={{ fontFamily: "Cairo" }}
        >
          منصة تعليمية مفتوحة للنهضة بالأمة العربية
        </span>

        <div className="mt-8" />
        <Image
          onClick={continueWithGoogle}
          src={continueWithGoogleImage}
          alt="Continue With Google"
          className=" cursor-pointer"
        />
      </div>
    </main>
  );
}
