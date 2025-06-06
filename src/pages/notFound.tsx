import { Link } from "react-router";

export function NotFound(){
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center fixed bg-gray-100 text-gray-500/80">
        <h1 className="text-[170px]" >Oops!</h1>
        <span className="uppercase text-2xl" >404 - page not Found</span>
        <p>A página solicitada não pôde ser encontrada</p>
        <Link to={"/"} className="mt-10">
          <span className="bg-gray-500 px-10 py-2 rounded text-gray-200 font-semibold">
            Voltar
          </span>
        </Link>
      </div>
    </>
  )
}