import { storage } from "@/firebase/config";
import { getDownloadURL, ref } from "firebase/storage";

export const fetchImageUrl = async (imagePath: string) => {
  const storageRef = ref(storage, imagePath);

  try {
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return null;
  }
};
