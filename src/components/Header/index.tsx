import {FaHome} from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className={"flex justify-between items-center px-60 py-6"}>
      <Link href={"/"}>
        <FaHome color={"#c2410c"} size={36} />
      </Link>
      <div className={"flex items-center gap-4 text-lg"}>
        <Link href={"https://www.linkedin.com/in/luishw/"} className={"hover:text-orange-700 duration-200"}>
          LinkedIn
        </Link>
        <Link href={"/curriculo.pdf"} target={"_blank"} className={"px-6 py-1.5 text-orange-700 border-2 border-orange-700 rounded-full hover:bg-orange-700 hover:text-white duration-200"}>
          Currículo
        </Link>
      </div>
    </div>
  )
}