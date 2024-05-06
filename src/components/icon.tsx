/*
    App Icons
    To Add New Icons -> https://react-icons.github.io/
*/

import { IoIosArrowRoundBack, IoMdAddCircle } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { RiPsychotherapyFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { PiFilmReel } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

const Icon = (params: {
  type?: string;
  style?: string;
  size?: 15 | 20 | 25 | 30 | 40 | 50 | 100 | 200;
}) => {
  const type: string = params.type || "";
  const style: string = params.style || "";
  const size: number = params.size || 15;

  // React icons
  switch (type) {
    case "back":
      return <IoIosArrowRoundBack className={style} size={size} />;
    case "add":
      return <IoMdAddCircle className={style} size={size} />;
    case "designer":
      return <MdDesignServices className={style} size={size} />;
    case "developer":
      return <IoCodeSlash className={style} size={size} />;
    case "other":
      return <RiPsychotherapyFill className={style} size={size} />;
    case "teacher":
      return <FaChalkboardTeacher className={style} size={size} />;
    case "film":
      return <PiFilmReel className={style} size={size} />;
    case "mail":
      return <CiMail className={style} size={size} />;
  }
};

export { Icon };
