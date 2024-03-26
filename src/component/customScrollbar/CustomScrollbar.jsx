import { Children } from "react"
import Styles from './Scrollbar.module.css'
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useScroll } from "./useScroll";


function CustomScrollbar({children,vertical,horizontal,trackColor,width,thumbColor}) {
  const {componentElement,leftButton,rightButton} = useScroll()
  return (
    <div className={ ` flex mt-4  items-center justify-around  border border-[#0000002b] `}>
      <div ref={leftButton} className=" w-[2rem] cursor-pointer hover:bg-[#0000003c] bg-[#00000010] rounded-[50%]  min-h-[2rem]" ><IoIosArrowDropleft className=" w-[2rem] min-h-[2rem] " /></div>
      <div ref={componentElement} className= {`${Styles.scroll}  select-none flex items-center  p-[.1rem]`} >{children}</div>
      <div ref={rightButton} className=" w-[2rem] cursor-pointer hover:bg-[#0000003c] bg-[#00000010] rounded-[50%]  min-h-[2rem]" ><IoIosArrowDropright className=" w-[2rem] min-h-[2rem]" /></div>
    </div>
  )
}

export default CustomScrollbar
