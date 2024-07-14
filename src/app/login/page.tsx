"use client";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";

import Header from "@/components/header";
import firebase_app, { db } from "@/firebase/config";
import { useUserStore } from "@/store/useUserStore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import continueWithGoogleImage from "../../assets/continuewithgoogle.svg";
import "../../styles/fonts.css";

export default function Login() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  useEffect(() => {
    getAuth(firebase_app);
  }, []);

  const { setUser } = useUserStore();

  function continueWithGoogle() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log(token);
        const user = result.user;

        try {
          const docRef = doc(db, "Users", user.email!);
          const docSnap = await getDoc(docRef);

          if (!docSnap.exists()) {
            await setDoc(docRef, {
              email: user.email,
              name: user.displayName,
              photoURL: user.photoURL,
              id: user.uid,
              phoneNumber: user.phoneNumber,
            });
          }
          const userDoc = await docSnap.data();
          setUser(userDoc ?? user);
          if (userDoc && userDoc.username === undefined) {
            router.push("/createstudent");
          } else {
            router.push("/home");
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
        <span
          className="  text-7xl text-black"
          style={{ fontFamily: "Ghaith" }}
        >
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
