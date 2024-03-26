import { useState , useRef } from "react"
import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
import { useGetBoundingClientRect } from "../../utils/useGetBoundingClientRect"

function Tool({element,tooltipText}) {
  const [tooltip,setTooltip] = useState(false)
  const toolTipRef = useRef()
  const position = useGetBoundingClientRect(toolTipRef)
  
  return (
    <>
    <div ref={toolTipRef} className="  w-fit parent-tooltip ">
      <span  onClick={()=>{ setTooltip(false)}} onMouseEnter={()=>setTooltip(true)} onMouseLeave={()=>setTooltip(false)} >{element}</span>
    </div>
    <span style={{
      top:position?.bottom,
      left:position?.x
    }} className={`absolute z-[3]  text-nowrap whitespace-nowrap top-[] hidden sm:block text-[.8rem] left-[20%] rounded-[.4rem] px-[.3rem] select-none text-[#fff]  transition-[visibility] duration-100  ${tooltip ?' visible delay-[.5s] ' : 'invisible' } bg-[#373737] child-tooltip`}>
          {tooltipText}
    </span>
    </>
  )
}

export default Tool
