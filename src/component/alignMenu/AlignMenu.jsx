import Tool from "../tooltip/Tool"
import { CiTextAlignCenter,CiTextAlignLeft,CiTextAlignJustify,CiTextAlignRight } from "react-icons/ci"
import Selector from "../stlyes&font/Selector"
import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { FORMAT_ELEMENT_COMMAND } from "lexical"

function AlignMenu({x,y}) {
  const [editor] = useLexicalComposerContext()
    const {setIcon,alignMenu,setAlignMenu} = useContext(MainContext)
    const style = 'hover:bg-[#4949492b] cursor-pointer w-[1.8rem] h-[1.8rem] p-[.2rem] rounded'
  return (
      <div     style={{
        top:`${y+50}px`,
        left:`${x}px`
      }} className={`absolute flex ${alignMenu ? 'visible': 'invisible'} items-center gap-[.01rem] bg-[#fffcfc] p-[.6rem] z-[1] top-[103%] rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
    <Tool element={<CiTextAlignJustify className={`${style}`} onClick={()=>{
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND,'justify')
        setAlignMenu(false)
        setIcon(<CiTextAlignJustify className={`${style}`} />)}} />} tooltipText={'Justify'} />

    <Tool element={<CiTextAlignLeft className={`${style}`} onClick={()=>{
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND,'left')
        setIcon(<CiTextAlignLeft className={`${style}`}/>)
        setAlignMenu(false)
        }} />} tooltipText={'Left align'} />

    <Tool element={<CiTextAlignRight className={`${style}`} onClick={()=>{
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND,'right')
        setAlignMenu(false)
        setIcon(<CiTextAlignRight className={`${style}`} />)}} />} tooltipText={'Right align'} />
    <Tool element={<CiTextAlignCenter className={`${style}`} onClick={()=>{
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND,'center')
        setAlignMenu(false)
        setIcon(<CiTextAlignCenter className={`${style}`} />)}} />} tooltipText={'Center align'} />
    </div>
  )
}

export default AlignMenu
