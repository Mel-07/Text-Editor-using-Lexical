

function HeaderSideMenu({children}) {



  return (
    <div className={`absolute new-child invisible rounded-md flex gap-[.5rem] flex-col min-w-[20rem] px-[.1rem]  bg-[#fffcfc] py-2 z-[1] top-[-3%] left-[100%] shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
      {children}
    </div>
  )
}


export default HeaderSideMenu
