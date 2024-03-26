import { forwardRef } from "react"

const MenuButton = forwardRef(({onclick,children,id,className},ref) =>{
  console.log( )
  return (
    <button   ref={ref} className={className}    onClick={onclick }>
      <span id={id} >{children}</span>
    </button>
  )
})
MenuButton.displayName = "MenuButton";
export default MenuButton 
