
import { useEffect,useState,useRef } from "react";
export  function useGetWidthHeight(){
    const widthHeightRef = useRef()
    const [width,setWidth] = useState()
    const [height,setHeight] = useState()


    useEffect(()=>{
        const currentTarget = widthHeightRef.current;
        const resize = (e)=>{
           setWidth(e.target?.offsetWidth)
           setHeight(e.target?.offsetHeight)
           console.log(e)
        }
        const getResize = ()=>{
            setWidth(currentTarget?.offsetWidth)
            setHeight(currentTarget?.offsetHeight)
        }
        getResize()
        
        currentTarget?.addEventListener('resize',resize)

        return ()=>{
            currentTarget?.removeEventListener('resize',resize)
        }
    },[])
 

    return{
        widthHeightRef,
        size:{
            width,
            height
        }
    }
}