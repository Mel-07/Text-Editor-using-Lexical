import Tool from "../tooltip/Tool";
import HeaderList from "../headerlist/HeaderList";
import HeaderSideMenu from "./HeaderSideMenu";
import Ribbon from "../ribbon/Ribbon";
import MenuButton from "../menuButton/MenuButton";
import { MainContext } from "../../context/MainContext";
import paperclip from '../../assets/image/paper-clip-clip-svgrepo-com.svg'
import MenuWrapper from "./MenuWrapper";
import { GoDownload } from "react-icons/go";
import { IoDocumentTextOutline,IoPrint } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

import {  useRef, useContext } from "react";
import InsetMenu from "../inset_componet/InsetMenu";
import EditMenu from "../EditMenu/EditMenu";


function Header() {

  const itemRefs = useRef([]);
  const renameRef = useRef()
  // context
  const {rename,getRenameValue,formatContent,
     fileMenu,
     editMenu,insetMenu,
     formatMenu,
     setFile,
     setEdit,
     setInset,
     setFormat,focusElement,
     fileRef,
     editRef,
     insetRef,
     formatRef,
     toggleMenu
    } = useContext(MainContext)

  // useEffect(()=>{
  //   function closeAllMenu(e){
  //     if(e.target.classList.contains('file')){
  //       if(fileMenu === true){
  //         setFile(false)
  //       }else if(fileMenu === false){
  //         setFile(true)
  //       }
  //     }
  //     else{
  //       setFile(false)
  //     }
  //   }

  //   window.document.addEventListener('click', closeAllMenu)

  //   return ()=>{
  //     window.document.removeEventListener('click',closeAllMenu)
  //   }
  // },[])



  const btnHeader = ['File','Edit','Inset','Format']
  return (
    <header className="max-w-[100%]  p-2 mx-auto">
      <div className="flex gap-4 items-center">
      <img src={paperclip} alt="clip-note" className="w-[3rem] h-[3rem] cursor-pointer " />
      {/* nav */}
      <nav className=" flex flex-col items-center gap-[.1rem]">
        <div >
        <Tool  element={<input type="text" onClick={()=>{
              setFile(false)
              setEdit(false)
              setInset(false)
              setFormat(false)
        }} onChange={(e)=>getRenameValue(e) } ref={renameRef} value={rename} className=" text-center   rounded bg-transparent  min-w-full outline-[.1px] outline-[#0000004e] hover:outline "/>} tooltipText={'Rename'} />

        </div>
        <div className=" flex items-center mb-1 gap-[2rem]">
        {btnHeader.map((value,i)=>(
                <div ref={itemRefs.current[i]}   className={` relative `} key={i} >
                  {/* ${fileMenu && 'bg-[#4949492b] rounded'} onClick={(e)=>getMenu({e,i})} */}
                  <button ref={i=== 0 ? fileRef : i===1 ? editRef : i===2 ? insetRef : i=== 3 && formatRef}   className={`
                          ${i === 0 ? ` ${fileMenu && 'bg-[#4949492b] rounded'}` : 
                          i === 1 ? `edit ${editMenu && 'bg-[#4949492b] rounded'}` : 
                          i === 2 ? `inset ${insetMenu && 'bg-[#4949492b] rounded'}` : 
                          i === 3 && `format ${formatMenu && 'bg-[#4949492b] rounded'}`}   
                          min-w-[100%] text-[.8rem] hover:bg-[#4949492b] select-none px-[.2rem] rounded `}
                          onClick={ toggleMenu}
                >
                {value}
                </button>
                   {
                   i==0 ?
                    //fileMenu 
                   <MenuWrapper stateOfMenu={fileMenu} >
                    {/* New */}
                    <div className="relative new-parent">
                    <HeaderList icon={<IoDocumentTextOutline className="h-[1.5rem] w-[1.5rem]" />} text={'New'} downIcon={<IoMdArrowDropdown/>} />
                      <HeaderSideMenu>
                        <HeaderList icon={<IoDocumentTextOutline className="h-[1.5rem] w-[1.5rem]" />} text={'Document'} />
                      </HeaderSideMenu>
                    </div>
                    <div className="relative new-parent">
                      <HeaderList icon={<GoDownload className="h-[1.5rem] w-[1.5rem]" />} text={'Download'} downIcon={<IoMdArrowDropdown/>} />
                      <HeaderSideMenu>
                        <HeaderList  text={'Microsoft Word (.docx)'} />
                        <HeaderList  text={'PDF Document (.pdf)'} />
                        <HeaderList  text={'Plain Text (.txt)'} />
                      </HeaderSideMenu>
                    </div>
                    <div onClick={()=>{
                      renameRef.current.focus()
                      renameRef.current.select()
                      focusElement(true)
                    }} >
                    <HeaderList icon={<MdOutlineDriveFileRenameOutline className="h-[1.5rem] w-[1.5rem]" />} text={'Rename'}  />
                    </div>
                    <HeaderList icon={<IoPrint className="h-[1.5rem] w-[1.5rem]" />} text={'Print'} keyPress={'Ctrl+P'}  />
                   </MenuWrapper>
                  //  edit menu
                    : i== 1 ? <EditMenu/>
                    : i== 2 ? <InsetMenu/>
                    : i == 3 && <MenuWrapper stateOfMenu={formatMenu}  >4</MenuWrapper>}
                </div>
            ))}
        </div>
      </nav>
      </div>



    {/* Ribbon */}
    <Ribbon/>
    </header>
  )
}

export default Header
