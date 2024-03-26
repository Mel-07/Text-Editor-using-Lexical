import { useContext } from "react"
import { MainContext } from "../../../context/MainContext"


function FontStyle({x,y}) {
    const {openStyleMenu } = useContext(MainContext)
  return (
    <div
    style={{
        top:`${y+50}px`,
        left:`${x}px`
      }}
     className={`absolute z-[1]  min-w-[10rem] max-h-[40rem] overflow-y-scroll scroll grid ${openStyleMenu ?'visible' : 'invisible'} w-fit flex items-center gap-[.01rem] bg-[#fffcfc] p-[.2rem] z-[1] top-[103%] rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]`} >
    <div  className=" flex">
        dfhgfgffg
    </div>
  </div>
  )
}

export default FontStyle
