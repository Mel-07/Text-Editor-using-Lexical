import { useContext } from "react"
import PropsTypes from 'prop-types'
import { MainContext } from "../../context/MainContext"
function Selector({text,icon,clickState,func}) {
  const {nodeText,textType} = useContext(MainContext)

  return (
    <>
     <div onClick={func} className={`flex  items-center gap-[.3rem] ${(text == textType[0] || text == textType[1] || text == textType[2] || text == textType[3] || text == textType[4] || text == textType[5] || text == textType[6] ) && 'w-[9rem] whitespace-nowrap justify-between' }  ${ !(icon === "") && 'hover:bg-[#4949492b] p-2 '} ${clickState && 'bg-[#4949492b]'}  rounded cursor-pointer`}>
      { text && <span className={`${ (icon === '') && 'hover:bg-[#4949492b] text-nowrap whitespace-nowrap p-[.4rem] rounded'}`} >{text}</span>} 
      {icon && <span className={`${ (icon === '') && 'hover:bg-[#4949492b] p-[.4rem] rounded'}`} >{icon}</span>}</div> 
    </>
  )
}

Selector.PropsType ={
  text: PropsTypes.string,
  icon: PropsTypes.object || PropsTypes.string,
  clickState: PropsTypes.any,
  func: PropsTypes.func
}

export default Selector
