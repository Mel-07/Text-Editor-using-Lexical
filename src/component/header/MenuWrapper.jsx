

function MenuWrapper({stateOfMenu,children}) {
  return (
    stateOfMenu &&     <div className={`absolute select-none rounded-md flex gap-[.5rem] px-[.1rem] flex-col min-w-[15rem]  bg-[#fffcfc] py-2 z-[1] top-[115%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]`} >
    {children}
  </div>
  )
}

export default MenuWrapper
