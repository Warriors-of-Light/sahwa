import { db } from "@/firebase/config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const request = await req.json();
  const email = request.email;

  try {
    const docRef = doc(db, "Users", email);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({
        error: "User not found",
      });
    }
    return NextResponse.json({
      user: docSnap.data(),
    });
  } catch (error: any) {
    return {
      status: 500,
      body: {
        error: error.message,
      },
    };
  }
}

export async function GET() {
  try {
    const allUsers: Array<any> = [];
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      allUsers.push(doc.data());
    });
    return NextResponse.json({
      users: allUsers,
    });
  } catch (error: any) {
    return {
      status: 500,
      body: {
        error: error.message,
      },
    };
  }
}
