import { useContext } from "react";
import { useArrayRef } from "../../../utils/useArrayRef";
import { tool } from "../data/data"
import { MainContext } from "../../../context/MainContext";

function Toolbar() {
  const {canvasRef} = useContext(MainContext)
    const {refValue} = useArrayRef(tool)
    const handleIcons = (e)=>{

        if(refValue[0].current.contains(e.target)){
           
        } else if(refValue[1].current.contains(e.target)){
           
        }
        else if(refValue[2].current.contains(e.target)){
           
        }
        else if(refValue[3].current.contains(e.target)){
           
        }
        else if(refValue[4].current.contains(e.target)){
           
        }
        else if(refValue[5].current.contains(e.target)){
           
        }
        else if(refValue[6].current.contains(e.target)){
           
        }
        else if(refValue[7].current.contains(e.target)){
           
        }
    }
  return (
    <div className="z-[2] p-1 items-center justify-center w-fit rounded-md bg-[#e2e2e2]  flex">
      {tool.map((value,i)=>(
        <button className="w-fit" ref={refValue[i]} key={value.titleText} type="button">
            <value.icon title={value.titleText} onClick={handleIcons}  className={`relative hover:bg-[#6a9156e2] text-[#000000] mx-[.5rem] text-[2rem] rounded-md bg-[#6a915668] p-[.3rem]`} />
        </button>
      ))}
    </div>
  )
}

export default Toolbar
