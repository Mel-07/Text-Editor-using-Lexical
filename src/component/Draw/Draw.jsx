import { useContext, useEffect } from 'react'
import Canvas from './component/Canvas'
import { useGetWidthHeight } from './utils/useWindowWidth_Hight'
import { MainContext } from '../../context/MainContext'
function Draw() {
  const {widthHeightRef,size} = useGetWidthHeight()
  const {canvas,outFrameOfCanvasRef,setLayoutMousePosition,layoutMousePosition,} = useContext(MainContext)

  // useEffect(()=>{
  //   const frameCanvasLayout = outFrameOfCanvasRef.current
  //   const handleResize = (e)=>{
  //     const x = e?.target
  //     const y = e?.target
  //     setLayoutMousePosition(prev=>{
  //       return{
  //         ...prev,
  //         x,
  //         y
  //       }
  //     })
  //     console.log(layoutMousePosition)
  //   }

  //   frameCanvasLayout.addEventListener('mousemove',handleResize)

  //   return ()=>{
  //     frameCanvasLayout.removeEventListener('mousemove',handleResize)
  //   }
  // },[layoutMousePosition,setLayoutMousePosition,outFrameOfCanvasRef])

  return (
    <div ref={outFrameOfCanvasRef} className ={`min-w-[100%] ${canvas ? 'visible' : 'invisible'} z-[2] grid place-content-center  fixed min-h-[100dvh] bg-[#00000056]`}>
      <div ref={widthHeightRef} className='bg-white rounded-[.5rem] min-w-[50rem] h-[40rem]  '><Canvas {...size}/></div>
    </div>
  )
}

export default Draw
