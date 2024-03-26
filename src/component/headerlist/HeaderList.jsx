
function HeaderList({downIcon,text,icon,keyPress}) {
  return (
    <>
    <div className="flex g-[1rem] basis-[100%] px-[.5rem] py-[.2rem] cursor-pointer hover:bg-[#4949492b] items-center">
      <div className=" mr-auto flex gap-4 items-center">
        <span className="text-[1.1rem]">{icon}</span>
        <span className="text-[1.1rem] font-medium ">{text}</span>
      </div>
      {
        downIcon && <span className="rotate-[270deg]">{downIcon}</span>
      }
      {
        keyPress && <span className="text-[.9rem] font-bold px-1 text-[#00000087]" >{keyPress}</span>
      }
    </div>
    </>
  )
}

export default HeaderList
