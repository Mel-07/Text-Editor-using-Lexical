import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
import { FaX } from "react-icons/fa6"
function TextColor() {
    const {getColor,colorFile,textColorMenu,setTextColorMenu} = useContext(MainContext)
  return (
    <div className={`h-[100dvh] min-w-[100vw]  fixed ${textColorMenu ?'visible' : 'invisible'}  z-[2] gap-2 bg-[#00000060] grid place-content-center`}>
    <FaX title="close" onClick={()=>setTextColorMenu(false)} className=" duration-300 transition-[box-shadow] cursor-pointer  w-[3rem] h-[3rem] p-2 hover:shadow-[0_3px_10px_rgb(0,0,0,.5)] rounded-[50%] bg-[#ffffff]" />
    <div className={` min-w-[100%] grid   items-center gap-[.01rem] bg-[#fffcfc] p-[.2rem] z-[1] rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]`} >
      <div  className=" grid grid-cols-10 p-2 gap-[.3rem] mx-auto w-[100%] place-items-center  ">
        {
          colorFile.map((value,i)=>(
            <button onClick={()=>{
              getColor(value.hex)   
              }} title={value.name} className={` h-[2.5rem] border-[.1rem] border-[#000]  rounded-full w-[2.5rem] `} style={{
              backgroundColor:value.hex,
            }} key={i}></button>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default TextColor
