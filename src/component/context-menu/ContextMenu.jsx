import { FaCopy,  FaFaceGrinWide, FaLink, FaPaste, FaTrash } from "react-icons/fa6"
import ContextButton from "../button_context/ContextButton"
import { FaCut } from "react-icons/fa"
import ContextList from "../stlyes&font/ContextList"
import { MainContext } from "../../context/MainContext"
import { useContext,useState } from "react"

function ContextMenu() {
    const {context,contextPosition,formatContent} = useContext(MainContext)
  return (
    <div>
            <div   style={{
        left:`${contextPosition.x}px`,
        top:`${contextPosition.y - 105}px`
      }} className={`absolute grid gap-y-3  ${context ? 'visible' : ' invisible'} min-w-[20rem] rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2    bg-white `}>

         {/* cut context */}
         <ContextButton type={'cut'} clickEvent={(e)=>{
            formatContent.isCut(e)
         }}>
         <ContextList icon={<FaCut/>} text={'Cut'} />
         </ContextButton>

        {/* copy context */}
        <ContextButton type={'click'} clickEvent={(e)=>{
          formatContent.isCopy(e)
            
         }}>

         <ContextList icon={<FaCopy/>} text={'Copy'}  />
         </ContextButton>

         {/* paste */}
         <ContextButton type={'click'} clickEvent={(e)=>{
          formatContent.isPaste(e)
         }}>
         <ContextList icon={<FaPaste/>} text={'Paste'}  />
         </ContextButton>
         {/* Delete */}
         <ContextButton type={'click'} clickEvent={(e)=>{
          console.log(e.type)
         }}>
         <ContextList type={'click'} icon={<FaTrash/>} text={'Delete'} />
         </ContextButton>
         {/* Emoji */}
         <ContextButton type={'click'} clickEvent={(e)=>{
          console.log(e)
         }}>
         <ContextList type={'click'} icon={<FaFaceGrinWide/>} text={'Inset Emoji'} />
         </ContextButton>
         {/* inset link */}
         <ContextButton type={'click'} clickEvent={(e)=>{
          console.log(e)
         }}>
         <ContextList icon={<FaLink/>} text={'Inset Link'} />
         </ContextButton>
      </div>
    </div>
  )
}

export default ContextMenu
