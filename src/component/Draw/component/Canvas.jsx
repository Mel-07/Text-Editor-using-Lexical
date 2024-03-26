import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Toolbar from "./Toolbar";
import Header from "./Header";
import MenuBar from "./MenuBar";
import Menu from "./Menu";
import { useGetBoundingClientRect } from "../../../utils/useGetBoundingClientRect";
import ButtonContainer from "./ButtonContainer";
import Save from "./Save";
import Close from "./Close";
import Pallet from './Pallet'
import { MainContext } from "../../../context/MainContext";


function Canvas(props) {
  const {canvasRef,ctx,menuBarRef,range,mouseDown,setMouseDown,palletColor,layoutMousePosition,  } = useContext(MainContext)
  const {width,height}= props;
  const [clientPost,setClientPos] = useState({x:null,y:null})
  const draw = useCallback((e)=>{
    if(!mouseDown) return
    ctx?.lineTo( e.clientX 
      ,e.clientY)
    ctx.lineWidth = parseInt(range) > 50 ? parseInt(range) : parseInt(range)
    ctx.strokeStyle = palletColor
    ctx?.stroke()
  },[ctx,range,mouseDown,palletColor])



  return (
    <div className="relative overflow-hidden min-h-[100%]  w-fit">
    <Header>
      <MenuBar refElement={menuBarRef}/>
      <Toolbar/>
    </Header>
    <Menu x={useGetBoundingClientRect(menuBarRef)?.width} y={useGetBoundingClientRect(menuBarRef)?.height}/>
    <Pallet/>
    <ButtonContainer>
      <Save/>
      <Close/>
    </ButtonContainer>
    <canvas ref={canvasRef} onMouseMove={(e)=>{
          draw(e)
      setClientPos((prev)=>{return{
      ...prev,
      x:e?.clientX,
      y:e?.clientY
      }})
    }} onMouseUp={()=>{
      setMouseDown(false)
    }}
    onMouseDown={()=>{
      setMouseDown(true)
    }}  width={width} height={height}>
        
    </canvas>
      
    </div>
  )
}

export default Canvas
