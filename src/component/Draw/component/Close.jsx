import { useContext } from "react"
import { MainContext } from "../../../context/MainContext"


function Close() {
    const {canvasCloseRef,setCanvas,ctx} = useContext(MainContext)
  return (
    <button title="Close" onClick={()=>{
      setCanvas(false)
      ctx.reset()
    }} className="hover:bg-[#6a9156e2] p-2 text-[1rem] font-medium rounded-md bg-[#6a915668] " ref={canvasCloseRef}>
        <span>Close</span>
    </button>
  )
}

export default Close
