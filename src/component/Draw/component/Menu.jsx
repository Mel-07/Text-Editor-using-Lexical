import { useContext, useEffect } from "react"
import { MainContext } from "../../../context/MainContext"
import { drawMenuList } from "../data/data"
import { useArrayRef } from "../../../utils/useArrayRef"


function Menu({x,y}) {
    const {refValue} = useArrayRef(drawMenuList)
    const {openCanvasMenu,drawMenuRef,setCanvasMenu,menuBarRef } = useContext(MainContext)
    const drawMenuCurrent = menuBarRef.current
    
  return(
    <div ref={drawMenuRef} style={{
      top:y+20,
      left:x/drawMenuCurrent?.offsetWidth + 5
  }} className={` absolute p-2 ${openCanvasMenu ? ' visible ' : 'invisible'}  rounded-md shadow-[0px_0px_5px_1px_#535353e0] bg-[#6a9156e2]`}>
    {drawMenuList.map((value,i)=>(
      <div  key={value.text} className="rounded-md min-w-[10rem] flex flex-col items-center">
        <button ref={refValue[i]} onClick={(e)=>{
          if(refValue[i].current.contains(e.target)){
            setCanvasMenu(!refValue[i].current.contains(e.target))
          }
        }} type="button" className={`flex outline-[#a5e187] rounded-md  min-w-[100%] p-2 transition-colors duration-300  hover:bg-[#a5e187] items-center gap-[1.5rem]`}><value.icon className="text-[1.1rem] " /><span className="text-[.9rem]  ">{value.text}</span></button>
      </div>
    ))}
  </div>
  )
}

export default Menu
