export function Loading(){
  return (
    <div className=" absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center z-9999">
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

export function Loader(){
  return (
    <>
      <div className="">
        <div className ="loader opacity-60" ></div>
      </div>
    </>
  )
}

export function LoaderSM () {
  return (
    <>
      <div className="">
        <div className ="loaderSM opacity-60"></div>
      </div>
    </>
  )
}