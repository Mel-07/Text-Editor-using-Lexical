import MenuWrapper from "../header/MenuWrapper"
import { createRef, useContext, useEffect, useRef, useState } from "react"
import { MainContext } from "../../context/MainContext"
import { insetMenuProperty } from "../../assets/Data/infoData"
import { useArrayRef } from "../../utils/useArrayRef"


function InsetMenu() {
    const {insetMenu,setCanvas} = useContext(MainContext)
    const {refValue} = useArrayRef(insetMenuProperty)
    const lengthOfArray = insetMenuProperty.length

    function handleEvent(e){
        refValue[0].current.contains(e.target) ? 
        setCanvas(true) : 
        refValue[1].current.contains(e.target) ?  console.log(`run some code for event ${insetMenuProperty[0].text}`) : 
        refValue[2].current.contains(e.target) && console.log(`run some code for event ${insetMenuProperty[2].text}`)
    }
  return (
    <MenuWrapper stateOfMenu={insetMenu}  >
        {
            insetMenuProperty.map((value,i)=>(
                <div onClick={handleEvent} ref={refValue[i]} className="  " key={i}>
                    <div  className={`flex min-w-[100%] ${ insetMenuProperty[i]=== insetMenuProperty[lengthOfArray - 1] ? 'border-none' : 'border-b-[.2rem]' } cursor-pointer hover:bg-[#4949492b] gap-[1rem] basis-[100%] px-[.5rem] p-[.3rem] items-center text-[1.1rem]`}><value.icon/> <span className="font-medium">{value.text}</span></div>
                </div>
            ))
        }
    
    </MenuWrapper> 
  )
}

export default InsetMenu
