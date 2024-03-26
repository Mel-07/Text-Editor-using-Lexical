import { useCallback, useEffect, useRef } from "react"

let event_keys = ['cut','copy','paste']
function ContextButton({children,clickEvent,type}) {
    const btnRef = useRef()
    const handleEvent = useCallback((e) =>{
        clickEvent(e)
    },[clickEvent])
    
    useEffect(()=>{

        const btn =btnRef.current

        btn.addEventListener(type,handleEvent)

        return ()=>{
            btn.removeEventListener(type,handleEvent)
        }
    },[handleEvent,type])
  return (

    <button ref={btnRef} className="min-w-[100%]"  >
      {children}
    </button>
  )
}

export default ContextButton
