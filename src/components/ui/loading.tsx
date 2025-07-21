export function Loading(){
  return (
    <div className=" absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
      <div className="banter-loader">
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
        <div className="banter-loader__box"></div>
      </div>
    </div>
    )
}

type LoaderType = {
  loader?: "loaderMD" | "loaderSM"
}

export function Loader({ loader = "loaderMD"}: LoaderType){
  return (
    <>
      <div className="">
        <div className ={`${loader} opacity-60`}></div>
      </div>
    </>
  )
}