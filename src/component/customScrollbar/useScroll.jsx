import { useEffect, useRef } from "react";

export function useScroll(){ 
    const componentElement = useRef();
    const leftButton = useRef();
    const rightButton = useRef();



    useEffect(()=>{
        function handleScrollRight(){
            componentElement.current.scrollBy({left:componentElement.current.clientWidth})
        }
        function handleScrollLeft(){
            componentElement.current.scrollBy({left:-componentElement.current.clientWidth})
        }
        const rightButtonTarget = rightButton.current
        const leftButtonTarget = leftButton.current
        rightButtonTarget.addEventListener('click',handleScrollRight)
        leftButtonTarget.addEventListener('click',handleScrollLeft)

        return()=>{
            rightButtonTarget.removeEventListener('click',handleScrollRight)
            leftButtonTarget.removeEventListener('click',handleScrollLeft)
        }
    },[])


    return{
        componentElement,
        leftButton,
        rightButton
    }
}