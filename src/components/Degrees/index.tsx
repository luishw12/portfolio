import Image from "next/image";
import AppMoviesImg from "@/img/app-movies-logo.png";
import CsInvestImg from "@/img/cs-invest-logo.png";
import DesignSystemImg from "@/img/design-system-logo.png";
import Link from "next/link";

export default function Degrees() {
  return (
    <div className={"px-60 bg-orange-700"}>
      <div className={"bg-white rounded-[40px] flex flex-col gap-16 justify-center p-16"}>
        <h3 className={"text-3xl font-semibold text-slate-900 text-center"}>Meus Projetos</h3>
        <div className={"flex grid-cols-3 gap-12"}>
          <div className={"bg-[#242A31] w-full rounded-3xl overflow-hidden group relative"}>
            <Image src={AppMoviesImg} alt={"App Movies Logo"} className={"group-hover:opacity-0 duration-200"} />
            <div className={"text-white p-6 flex flex-col gap-6 items-center justify-center h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-200"}>
              <p className={"text-center"}>Projeto mobile feito com React Native e Expo, consumindo uma API pública chamada TMDB.</p>
              <Link
                target={"_blank"}
                href={"https://github.com/luishw12/AppMovies"}
                className={"border-2 border-white rounded-full px-4 py-1 hover:bg-white hover:text-slate-900 duration-200"}>Ver Mais</Link>
            </div>
          </div>
          <div className={"bg-[#242A31] w-full rounded-3xl overflow-hidden group relative"}>
            <Image src={CsInvestImg} alt={"Cs Invest Logo"} className={"group-hover:opacity-0 duration-200"}/>
            <div
              className={"text-white p-6 flex flex-col gap-6 items-center justify-center h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-200"}>
              <p className={"text-center"}>Projeto web feito com Next.js/React.js, PostgreSQL e Tailwind CSS. O projeto possui API própria.</p>
              <Link
                target={"_blank"}
                href={"https://cs-invest-2.vercel.app/login"}
                className={"border-2 border-white rounded-full px-4 py-1 hover:bg-white hover:text-slate-900 duration-200"}>Ver
                Mais
              </Link>
            </div>
          </div>
          <div className={"bg-[#242A31] w-full rounded-3xl overflow-hidden group relative"}>
            <Image src={DesignSystemImg} alt={"Design System Logo"} className={"group-hover:opacity-0 duration-200"}/>
            <div
              className={"text-white p-6 flex flex-col gap-6 items-center justify-center h-full absolute top-0 opacity-0 group-hover:opacity-100 duration-200"}>
              <p className={"text-center"}>Biblioteca NPM feita utilizando Storybook, React.js e Tailwind CSS.</p>
              <Link
                target={"_blank"}
                href={"https://www.npmjs.com/package/design-system-toshyro"}
                className={"border-2 border-white rounded-full px-4 py-1 hover:bg-white hover:text-slate-900 duration-200"}>Ver
                Mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}