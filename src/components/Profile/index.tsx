import ProfilePhoto from "@/img/foto-perfil.jpg";
import Image from "next/image";

export default function Profile() {
  return (
    <div className={"px-60 mt-16 flex flex-col gap-8 items-center"}>
      <div className={"flex flex-col items-center gap-8 text-slate-900"}>
        <h1 className={"text-5xl font-bold text"}>Desenvolvedor Web</h1>
        <p className={"text-xl"}>Crio soluções para problemas, e amo o que faço.</p>
      </div>
      <Image src={ProfilePhoto} alt={"Profile Photo"} width={250} className={"rounded-full"} />
    </div>
  )
}