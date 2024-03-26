
import { createContext, useEffect, useRef, useState,useMemo, createRef } from "react";
import { useCallback } from "react";
import { CiTextAlignJustify, CiTextAlignLeft, CiTextAlignRight, CiTextAlignCenter } from "react-icons/ci";
import colorFile from '../json/colors.json'
import { fontType } from "../assets/Data/infoData";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND } from "lexical";



const MainContext = createContext()

function MainProvider({ children }) {
  const [rename, setRename] = useState('Untitled document')
  const [alignMenu, setAlignMenu] = useState(false)
  const [alignmentIcon, setAlignmentIcon] = useState(<CiTextAlignJustify className=" cursor-pointer w-[1.5rem] h-[1.5rem] p-[.2rem] rounded" />)
  const [textColorMenu, setTextColorMenu] = useState(false);
  const [colors, setColor] = useState('#000')
  const [openStyleMenu,setOpenStyleMenu] = useState(false)
  const [highlightColorMenu, setHighlightColorMenu] = useState(false);
  const [highlightColors, setHighlightColor] = useState('')
  const [fontSizeMenu, setFontSizeMenu] = useState(false)
  const [bold, setBold] = useState(false)
  const [nodeText,setNodeText] = useState('Normal')
  const [context,setContext] = useState(false)
  const [imageMenu,setImageMenu] = useState(false)
  const [openDrawMenu,setDrawMenu] = useState(false)
  const [openCanvasMenu,setCanvasMenu] = useState(false)
  const [canvas,setCanvas] = useState(false)
  const [range,setRange] = useState(50)
  const [palletColor,setPalletColor] = useState("#000")
  const [mouseDown,setMouseDown] = useState(false)
  const [layoutMousePosition,setLayoutMousePosition] = useState({
    x:null,
    y:null
  })
  // menus
  const [fileMenu,setFile] = useState(false)
  const [editMenu,setEdit] = useState(false)
  const [insetMenu,setInset] = useState(false)
  const [formatMenu,setFormat] = useState(false)

  const fileRef = useRef()
  const editRef = useRef()
  const insetRef = useRef()
  const formatRef = useRef()
  const textNodeRef = useRef()
  const textStyleRef = useRef()
  const alignMenuRef = useRef()
  const colorMenuRef = createRef()
  const drawMenuRef = useRef()
  const canvasSaveRef = useRef()
  const canvasCloseRef = useRef()
  const canvasRef = useRef()
  const menuBarRef = useRef()
  const outFrameOfCanvasRef = useRef()
  // setting text value in setText() on initial render
  const [textValue, setText] = useState([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ])
  const contextMenuElement = useRef()
  const clipboard = navigator.clipboard;
  const positionObject ={
    x:'',
    y:''
  }
  const [contextPosition,setContextPosition] = useState(positionObject)
  const ctx = canvasRef.current?.getContext('2d')

  // text-type
  const textType = ['Normal','Title','Heading 1','Heading 2','Heading 3', "Quote", "Code"]


  function handleWindowContext(e){
    if((e.target.contains(contextMenuElement.current))){
      setContext(false)
    }
  }
  function closeContext(){
    setContext(false)
  }

    
     function focusElement(a){
      if(a){
        setFile(false)
        setEdit(false)
        setInset(false)
        setFormat(false)
      }
     }

  const toggleMenu = (e)=>{
    if(e?.target === fileRef.current){
      setFile(!fileMenu)
      setEdit(false)
      setInset(false)
      setFormat(false)
      setAlignMenu(false)
    }else if(e?.target === editRef.current){
      setFile(false)
      setEdit(!editMenu)
      setInset(false)
      setFormat(false)
      setAlignMenu(false)
    }else if(e?.target === insetRef.current){
      setFile(false)
      setEdit(false)
      setInset(!insetMenu)
      setFormat(false)
      setAlignMenu(false)
    }else if(e?.target === formatRef.current){
      setFile(false)
      setEdit(false)
      setInset(false)
      setFormat(!formatMenu)
      setAlignMenu(false)
    }
    else if( alignMenuRef.current.contains(e?.target)){
      setFile(false)
      setEdit(false)
      setInset(false)
      setFormat(false)
    }

  }

  const closeAllMenu = (e)=>{
    if(!(e?.target === formatRef.current || e?.target === insetRef.current || e?.target === editRef.current || e?.target === fileRef.current    )){
      setFile(false)
      setEdit(false)
      setInset(false)
      setFormat(false)
      setAlignMenu(false)
    }

    if( alignMenuRef.current.contains(e?.target)){
      setFile(false)
      setEdit(false)
      setInset(false)
      setFormat(false)
      setAlignMenu(!alignMenu)
    }else{
      setAlignMenu(false)
    }
  }

  // useEffect(()=>{
  //   document.addEventListener('click',alignJustify)

  //   return ()=>{
  //     document.removeEventListener('click',alignJustify)
  //   }
  // },[])
  useEffect(() => {

        document.addEventListener('contextmenu',handleWindowContext)
        document.addEventListener('click',closeContext)

        return ()=>{
          document.addEventListener('click',closeContext)
          document.removeEventListener('contextmenu',handleWindowContext)
        }
  }, [])
  // useEffect(()=>{
  //   fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${import.meta.env.VITE_FONT_API_KEY}`).then(
  //     (res) => res.json()).then((data)=>console.log(data.items[0]?.files?.regular
  //       ))
  // },[])


  const getRenameValue = useCallback((e) => {
    setRename(e?.target.value);
  }, []);

  function alignJustify() {
    // setAlignMenu(!alignMenu)
  }
  // getting color menu
  // const getColorMenu = useCallback(() => {
  //   setColorMenu(!colorMenu)
  // }, [colorMenu])

  // getting highlight color menu
  const getHighlightColorMenu = useCallback(() => {
    setHighlightColorMenu(!highlightColorMenu)
  }, [highlightColorMenu])

  // for setting alignment icon in place
  const setIcon = useCallback((e) => {
    setAlignmentIcon(e)
  }, [])
  // get color text

  const getColor = (value)=>   {
    setColor(value)
    setTextColorMenu(false)
    formatContent.isColor(value)
  }
  // get highlight color
  const getHighlightColor = (value)=>   {
    setHighlightColor(value)
    setHighlightColorMenu(false)
    formatContent?.isHighlightColor(value)
  }

  // inset image
  const handleImage = ()=>{
    setImageMenu(!imageMenu)
  }
  // inset link
  const handlelink = ()=>{
    const url = ''
    formatContent.inSetLink(url)
  }
  // handling context menu 
  const handleContextMenu = (e)=>{

    e.preventDefault()
    setContext(true)

    setContextPosition({
      ...positionObject,
      x:e.pageX,
      y:e.pageY
    })
  }
  // submit image 
  function submitImage(e){
    e.preventDefault()
    setImageMenu(false)
  }

  // format of content in the editor
  const formatContent = {
    // on paste
    isPaste:(e)=>{
      e.preventDefault()
    },
    isCut:(e)=>{
      console.log(e)
    },
    isCopy:(e)=>{
      e.preventDefault()

    },

    isBold: () => {

    },
    isUnderline: () => {
    },
    isItalic: () => {
    },
    isColor:(value)=>{

    },
    isHighlightColor:(value)=>{
    },
    isRedo:()=>{
    }
    ,
    isUndo:()=>{
    },
    inSetImage:()=>{

    },
    inSetLink:()=>{
      
    }
    ,
    toggleIsCode:(e)=>{
      e.preventDefault()
    },
    toggleIsHeadingOne:(e)=>{
      e.preventDefault()
    },
    toggleIsHeadingTwo:(e)=>{
      e.preventDefault()
    },
    toggleIsHeadingThree:(e)=>{
      e.preventDefault()
    },
    toggleTitle:(e)=>{
      e.preventDefault()
    },
    toggleIsBold: (event) => {
      event.preventDefault()
      setBold(true)
    }
    ,
    toggleIsUnderline: (event) => {
      event.preventDefault()
    }
    ,
    toggleIsItalic: (event) => {
      event.preventDefault()
    }
  }

  // opening fontsize style

  const openFontSize = useCallback(() => {
    setFontSizeMenu(!fontSizeMenu)
  }, [fontSizeMenu])

  const openFontStlye = useCallback(()=>{
    setOpenStyleMenu(!openStyleMenu)
  },[openStyleMenu])

  return (
    <MainContext.Provider value={
      {
        formatContent,
        rename,
        toggleMenu,
        getRenameValue,
        alignJustify,
        setIcon,
        alignMenu,
        alignmentIcon,
        colorFile,
        textColorMenu,
        colors,
        setText,
        textValue,
        fontSizeMenu,
        getColor,
        openFontSize,
        bold,
        getHighlightColor,
        getHighlightColorMenu,
        highlightColorMenu,
        highlightColors,openFontStlye,openStyleMenu,
        handleImage,
        handlelink,handleContextMenu,
        context,setContext,
        contextPosition,contextMenuElement,
        textType,
        nodeText,setNodeText,
        fileMenu,editMenu,insetMenu,
        formatMenu,focusElement,
        closeAllMenu,
         fileRef,
         editRef,
         insetRef,
         formatRef,
         colorMenuRef,setTextColorMenu,
         setHighlightColorMenu,
         setAlignMenu,
         imageMenu,
         setImageMenu,
         submitImage,
         textNodeRef,
         textStyleRef,
         alignMenuRef,
         canvasRef ,
         openDrawMenu,
         setDrawMenu,
         openCanvasMenu,
         setCanvasMenu,
         drawMenuRef,
         ctx,
         canvasSaveRef,
         canvasCloseRef,
         canvas,setCanvas,
         menuBarRef ,
         range,
         setRange,
         palletColor,
         setPalletColor,
         setMouseDown,
         mouseDown,
         outFrameOfCanvasRef,
         layoutMousePosition,
         setLayoutMousePosition,
         setFontSizeMenu

      }
    }>
      {children}
    </MainContext.Provider>
  )
}

export {
  MainProvider,
  MainContext
}
