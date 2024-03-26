import { useContext, useEffect } from "react";
import { TbMenu } from "react-icons/tb";
import { MainContext } from "../../../context/MainContext";

function MenuBar({refElement}) {
    
    const {openCanvasMenu,setCanvasMenu,drawMenuRef} = useContext(MainContext)

    useEffect(()=>{

      function handleMenu (e){
        if(refElement.current.contains(e.target)){
          setCanvasMenu(!openCanvasMenu)
        }else if(drawMenuRef.current === e.target){
          setCanvasMenu(true)
        }
        else{
          setCanvasMenu(false)
        }
  
      }
      window.addEventListener('click',handleMenu)

      return ()=>{
        window.removeEventListener('click',handleMenu)
      }
    },[setCanvasMenu,openCanvasMenu,refElement,drawMenuRef])
  return (
      <button tabIndex={0} ref={refElement} type=" button">
        <TbMenu   title="Menu" className={` cursor-pointer  text-[#000000] mx-[.5rem] text-[2rem] rounded-md ${openCanvasMenu && 'shadow-[0px_0px_5px_1px_#535353e0] bg-[#6a9156e2]' } hover:bg-[#6a9156e2] bg-[#6a915668] p-[.3rem]`}/>
      </button>
  )
}

export default MenuBar
