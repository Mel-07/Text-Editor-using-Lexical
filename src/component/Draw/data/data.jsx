import { FaRegCircle } from "react-icons/fa";
import { PiRectangle } from "react-icons/pi";
import { GoDiamond } from "react-icons/go";
import { IoTriangleOutline } from "react-icons/io5";
import { FiMousePointer } from "react-icons/fi";
import { CiEraser } from "react-icons/ci";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { HiOutlinePencil } from "react-icons/hi2";
import { IoFolderOpenOutline } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

export const tool = [
    {
        icon:FiMousePointer,
        titleText:'Selection'
    },
    {
        icon:FaRegCircle,
        titleText:'Circle'
    },
    {
        icon:PiRectangle,
        titleText:'Rectangle'
    },
    {
        icon:GoDiamond,
        titleText:'Diamond'
    },
    {
        icon:IoTriangleOutline,
        titleText:'Triangle'
    },
    {
        icon:CiEraser,
        titleText:'Eraser'
    },
    {
        icon:HiOutlineMinusSmall,
        titleText:'Line'
    },
    {
        icon:HiOutlinePencil,
        titleText:'Pencil'
    },
]
export const drawMenuList = [
    {
        icon:IoFolderOpenOutline,
        text:'Open'
    },
    {
        icon:CiSaveDown2,
        text:'Save'
    },
    {
        icon:AiOutlineDelete,
        text:'Reset'
    },
]
// color and id for pallet component
export const colors = [
    {
        id:1,
        color: '#ffffff',
        text:'White'
    },
    {
        id:2,
        color: '#000',
        text:'Black'
    },
    {
        id:3,
        color: '#ff0000',
        text:'Red'
    },
    {
        id:4,
        color: '#0000ff',
        text:'Blue'
    },
    {
        id:5,
        color: '#008000',
        text:'Green'
    },
    {
        id:6,
        color: '#ffff00',
        text:'Yellow'
    },
    {
        id:7,
        color: 'color',
        text:'Picker'
    },
]