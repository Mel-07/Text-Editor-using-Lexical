import { useContext } from "react"
import { MainContext } from "../../context/MainContext"
import { FaX } from "react-icons/fa6"


function Upload() {
    const {imageMenu,setImageMenu,submitImage} = useContext(MainContext)
  return imageMenu &&
  <div  className={`h-[100dvh] fixed w-[100%] z-[2] grid place-content-center bg-[#0000002f] `}>
  <div className="md:min-w-[40rem] sm:min-w-[20rem] h-[20rem] bg-white rounded-[1rem] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ">
    <div className="flex items-center border-b-[.2rem] justify-between p-2 "><span className=" font-extrabold text-[1.5rem] ">Inset Image</span> <FaX onClick={()=>setImageMenu(false)} className="p-2 cursor-pointer hover:shadow-[inset_-12px_-8px_40px_#46464620] text-[2.5rem] bg-[#f0f0f0] rounded-[50%] " /></div>
    <div className="p-2">
      <form className=" grid gap-[2rem]" >
        <div className=" grid w-full  grid-cols-2  gap-[.2rem] items-center ">
          <label htmlFor="image" className=" text-nowrap text-[1.1rem] " >Image Upload</label>
          <input type="file" className=" border-black p-2 w-full rounded border "  />
          </div>
          <div className=" grid w-full grid-cols-2  gap-[.2rem] items-center ">
          <label htmlFor="text" className="text-nowrap text-[1.1rem]" >Alt Text</label>
          <input type="text" className=" border-black p-2 w-full  rounded border "  />
          </div>
          <button onClick={submitImage} className=" place-self-end p-2 text-[1.1rem] font-bold rounded mr-[1rem] hover:bg-[#979797] bg-[#c5c5c5]">Confirm</button>
      </form>
    </div>
  </div>
</div>
}

export default Upload
