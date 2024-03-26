

function ContextList({downIcon,text,icon,keyPress}) {
  return (
    <div>
          <div className="flex g-[1rem] rounded basis-[100%] pX-[.2rem] py-[.2rem] cursor-pointer hover:bg-[#4949492b] items-center">
      <div className=" mr-auto text-[1.05rem] flex gap-4 items-center">
        <span>{icon}</span>
        <span className=" font-medium ">{text}</span>
      </div>
      {
        downIcon && <span className="rotate-[270deg]">{downIcon}</span>
      }
      {
        keyPress && <span className="text-[.9rem] font-bold px-1 text-[#00000087]" >{keyPress}</span>
      }
    </div>
    </div>
  )
}

export default ContextList
