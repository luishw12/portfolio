import Link from "next/link";
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";

export default function Footer() {
  return (
    <div className={"bg-orange-700 px-60 py-20 flex justify-center gap-4"}>
      <Link target={"_blank"} href="https://www.linkedin.com/in/luishw/" className={"border-2 rounded-full p-2 group hover:bg-white duration-200"}>
        <FaLinkedinIn size={20} className={"text-white group-hover:text-orange-700 duration-200"} />
      </Link>
      <Link target={"_blank"} href="https://www.instagram.com/luis.wendt/" className={"border-2 rounded-full p-2 group hover:bg-white duration-200"}>
        <FaInstagram size={20} className={"text-white group-hover:text-orange-700 duration-200"} />
      </Link>
      <Link href="mailto:luishw08@gmail.com" className={"border-2 rounded-full p-2 group hover:bg-white duration-200"}>
        <MdOutlineEmail size={20} className={"text-white group-hover:text-orange-700 duration-200"} />
      </Link>
      <Link target={"_blank"} href="https://github.com/luishw12" className={"border-2 rounded-full p-2 group hover:bg-white duration-200"}>
        <FaGithub size={20} className={"text-white group-hover:text-orange-700 duration-200"} />
      </Link>
    </div>
  )
}