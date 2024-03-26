

function ButtonContainer({children}) {
  return (
    <div className="flex items-center right-0 z-[2] bottom-0 p-2 gap-4 w-fit absolute">
      {children}
    </div>
  )
}

export default ButtonContainer
