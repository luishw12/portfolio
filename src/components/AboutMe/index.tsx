import Image from "next/image";
import CodeInspect from "@/img/code-inspect.svg";

export default function AboutMe() {
  return (
    <div className={"flex flex-col items-center mt-20"}>
      <Image src={CodeInspect} alt={"Code Inspect"} width={600} className={"z-10"} />
      <div className={"-mt-4 bg-orange-700 p-40 text-white flex flex-col gap-8 items-center px-96"}>
        <h2 className={"text-3xl font-semibold"}>Olá, me chamo Luís. Prazer em conhecê-lo.</h2>
        <p className={"text-xl font-light text-center"}>
          Tive o privilégio de trabalhar por 2 anos como jovem aprendiz em uma empresa de desenvolvimento de software,
          onde aprendi a utilizar tecnologias como React.js, PostgreSQL, TypeScript, entre outras. Atualmente, tento me
          manter atualizado sobre as tendências do mercado, criando projetos pessoais e trabalhando como freelancer.
        </p>
      </div>
    </div>
  )
}