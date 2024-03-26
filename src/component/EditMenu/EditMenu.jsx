import { MainContext } from "../../context/MainContext"
import { useContext } from "react"
import MenuWrapper from "../header/MenuWrapper"
import HeaderList from "../headerlist/HeaderList"
import MenuButton from "../menuButton/MenuButton"
import { GrRedo } from "react-icons/gr";
import { GrUndo } from "react-icons/gr";
import { MdOutlineDriveFileRenameOutline
    ,MdOutlineContentCopy,MdOutlineContentCut,MdOutlineContentPasteGo  } from "react-icons/md";

function EditMenu() {
    const {editMenu} = useContext(MainContext)
  return (
    <MenuWrapper stateOfMenu={editMenu}>
    <div className="border-b border-[#0002] flex flex-col gap-[.5rem] ">
      <HeaderList icon={<GrUndo className="h-[1.5rem] w-[1.5rem]" />} text={'Undo'} keyPress={'Ctrl+Z'}/>
      <HeaderList icon={<GrRedo className="h-[1.5rem] w-[1.5rem]" />} text={'Redo'} keyPress={'Ctrl+Y'}/>
    </div>
    <HeaderList icon={<MdOutlineContentCut className="h-[1.5rem] w-[1.5rem]" />} keyPress={'Ctrl+X'} text={'Cut'}/>
    {/* copy */}
    <MenuButton >
    <HeaderList icon={<MdOutlineContentCopy className="h-[1.5rem] w-[1.5rem]" />} keyPress={'Ctrl+C'} text={'Copy'}/>
    </MenuButton>
    {/* paste */}
    <MenuButton >
    <HeaderList icon={<MdOutlineContentPasteGo className="h-[1.5rem] w-[1.5rem]" />} keyPress={'Ctrl+V'} text={'Paste'}/>
    </MenuButton>
  </MenuWrapper>
  )
}

export default EditMenu
