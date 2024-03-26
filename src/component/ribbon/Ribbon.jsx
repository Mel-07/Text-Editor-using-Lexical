import Tool from "../tooltip/Tool";
import Selector from "../stlyes&font/Selector";
import Wallpper from "../headerWapper/Wallpper";
import MenuButton from "../menuButton/MenuButton";
import CustomScrollbar from "../customScrollbar/CustomScrollbar";
import { MainContext } from "../../context/MainContext";
import { GrRedo } from "react-icons/gr";
import { GrUndo } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { IoPrintOutline , IoLinkOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMinus,FaPlus,FaUnderline,FaHighlighter  } from "react-icons/fa6";
import { FaBold   } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa";
import { CiImageOn,CiTextAlignJustify,CiTextAlignLeft,CiTextAlignRight,CiTextAlignCenter } from "react-icons/ci";
import { MdOutlineFormatLineSpacing,MdFormatIndentDecrease,MdFormatIndentIncrease,MdFormatColorText  } from "react-icons/md";
import { PiListChecksThin,PiListNumbersThin } from "react-icons/pi";
import { HiOutlineListBullet } from "react-icons/hi2";
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {  useContext, useEffect, useRef } from "react";
import { useGetBoundingClientRect } from "../../utils/useGetBoundingClientRect";
import {mergeRegister} from '@lexical/utils';
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from 'lexical';
import Separator from "../seperator/Seperator";
import FontSize from "../font/fontSize/FontSize";
import FontStyle from "../font/fontStyle/FontStyle";
import AlignMenu from "../alignMenu/AlignMenu";

function Ribbon() {
  const [editor] = useLexicalComposerContext()
    const {alignJustify, alignMenu,setIcon
        ,alignmentIcon,textColorMenu,getColor,
        colorFile,colors,openFontSize,fontSizeMenu,bold,formatContent,
        getHighlightColor,openStyleMenu,
        getHighlightColorMenu,highlightColorMenu,highlightColors,openFontStlye,
        handleImage,
        handlelink,
        textType,
        nodeText,
        textNodeRef,
        textStyleRef,
        alignMenuRef,

        colorMenuRef
        ,setTextColorMenu} = useContext(MainContext)

  return (
    <>
      <FontSize x={useGetBoundingClientRect(textNodeRef)?.left} y={useGetBoundingClientRect(textNodeRef)?.top}/>
      <FontStyle x={useGetBoundingClientRect(textStyleRef)?.x} y={useGetBoundingClientRect(textStyleRef)?.y} />
      <AlignMenu x={useGetBoundingClientRect(alignMenuRef)?.x} y={useGetBoundingClientRect(alignMenuRef)?.y} />
        <CustomScrollbar>
    <Tool  element={<GrUndo onClick={()=>{
      editor.dispatchCommand(UNDO_COMMAND)
    }} className="  hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]"/>} tooltipText={'Undo'} />
    <Tool  element={<GrRedo onClick={()=>{
      editor.dispatchCommand(REDO_COMMAND)
    }}  className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]"/>} tooltipText={'Redo'} />
    <Tool  element={<GoSearch className="  hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]"/>} tooltipText={'Search'} />
    <Tool  element={<IoPrintOutline className="  hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]"/>} tooltipText={'Print(Ctrl+p)'} />
    <Separator/>

      {/* font Text Node */}
      <div ref={textNodeRef} className="mx-[1rem]" >
      <Tool tooltipText={'Styles'} element={<Selector func={openFontSize} clickState={fontSizeMenu} icon={<IoMdArrowDropdown onClick={openFontSize}/>} text={nodeText} />} />
      </div>
      
      {/* font style Menu */}
      <div ref={textStyleRef} className="mx-[1rem]" >
      <Tool tooltipText={'Font'} element={<Selector func={openFontStlye} icon={<IoMdArrowDropdown />} text={'Times'} />} />
      </div>

      <Separator/>
      <Tool element={<FaMinus className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]" />} tooltipText={'Decrease font size(Ctrl+shift+,)'} />
      <Tool element={<input value={0} type="text" className="max-w-[1.7rem] outline-none rounded border-[#0000003d] border-[.1rem] text-center  bg-transparent"/>} tooltipText={'Font size'} />
      <Tool element={<FaPlus  className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]" />} tooltipText={'Increase font size(Ctrl+shift+.)'} />
      <Separator/>
      {/* bold */}
      <Tool element={<FaBold onClick={(e)=>{
              editor.dispatchCommand(FORMAT_TEXT_COMMAND,'bold')
      }} className={`hover:bg-[#4949492b] ${bold && 'bg-[#4949492b]'} cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]`} />} tooltipText={'Bold(ctrl+B)'} />
      {/* italic */}
      <Tool element={<FaItalic onClick={()=>{
        editor.registerDecoratorListener()
        editor.dispatchCommand(FORMAT_TEXT_COMMAND,'italic')
      }} className={`hover:bg-[#4949492b]  cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]`} />} tooltipText={'Italic(Ctrl+I)'}/>
      {/* underLine */}
      <Tool element={<FaUnderline  onClick={()=>{
        editor.dispatchCommand(FORMAT_TEXT_COMMAND,'underline')
        console.log(editor._commands)
      }}  className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]" />} tooltipText={'Underline(Ctrl+U)'}/>
      {/* color */}
      <Tool element={<MdFormatColorText
      className={` hover:bg-[#4949492b]  cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]`}  
      onClick={()=>{
        setTextColorMenu(true)
      }}  style={{fill:colors}}  />} tooltipText={'Text color'}/>
      {/* highlight color */}
      <Tool element={<FaHighlighter onClick={getHighlightColorMenu} className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]" onclick={getHighlightColorMenu} style={{fill:highlightColors}} />} tooltipText={'Highlight color'} />
      <Separator/>
      {/* link */}
      <Tool element={<IoLinkOutline onClick={handlelink} className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]" />} tooltipText={'Inset link (Ctrl+K)'} />
      {/* image */}
      <Tool element={<CiImageOn onClick={handleImage} className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]" />} tooltipText={'Inset image'}/>
      <Separator/>
      {/* Text Align */}
      <div onClick={alignJustify} ref={alignMenuRef}>
      <Tool element={<Selector  clickState={alignMenu} icon={<IoMdArrowDropdown  />} text={ alignmentIcon} />} tooltipText={'Align'} />
      </div>

      <Tool element={<MdOutlineFormatLineSpacing className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]" />} tooltipText={'Line & Paragraph spacing'}/>
      <Selector icon={<Tool element={<IoMdArrowDropdown/>} tooltipText={'Checklist menu'} />} text={<Tool element={<PiListChecksThin/>}  tooltipText={'Checklist'}/>} />
      <Selector icon={<Tool element={<IoMdArrowDropdown/>} tooltipText={'Checklist menu'} />} text={<Tool element={<HiOutlineListBullet/>}  tooltipText={'Bulletted list'}/>} />
      <Selector icon={<Tool element={<IoMdArrowDropdown/>} tooltipText={'Number list menu'} />} text={<Tool element={<PiListNumbersThin/>}  tooltipText={'Number list'}/>} />
      {/* <Tool element={<MdFormatIndentDecrease className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]" />} tooltipText={'Decrease'}/>
      <Tool element={<MdFormatIndentIncrease className=" hover:bg-[#4949492b] cursor-pointer rounded p-2 w-[2.1rem] h-[2.1rem]" />} tooltipText={'Increase'}/> */}
    </CustomScrollbar></>
  )
}

export default Ribbon
