import { useEffect, useRef, useState } from "react";


export function useGetBoundingClientRect(refElement) {
    const [elementBounding,setElementBounding] = useState();

    useEffect(()=>{
        const upDateBounding = () =>{
            setElementBounding(refElement.current.getBoundingClientRect())
        }
        upDateBounding()

        window.addEventListener('resize',upDateBounding)

        return()=>{
            window.removeEventListener('resize',upDateBounding)
        }
    },[refElement])

    return elementBounding
}


