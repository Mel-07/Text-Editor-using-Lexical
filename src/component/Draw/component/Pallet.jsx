 import { useContext,useState } from "react"
import { colors } from "../data/data"
import Range from "./Rang"
import { MainContext } from "../../../context/MainContext"

 function Pallet (){
    const {palletColor,setPalletColor} = useContext(MainContext)
    const [selectedPalletColor,setSelectedPalletColor] = useState('')
    function debounce (e){
       const timeout = setTimeout(()=>{
            setPalletColor(e.target.value)
        },2000)
    }

    return(
        <div  className={` bg-[#6a9156e2]  rounded-md absolute min-w-fit gap-4 z-[3] top-[20%] right-[.2%] flex flex-col items-center p-2`}>
            <ul  className="flex flex-row items-center gap-4">
            {
                colors.map((value,i)=>(
                    colors[i] !== colors[colors.length -1] ?  <li key={value.id} onClick={(e)=>{
                        setPalletColor(e.target.style.backgroundColor)
                        setSelectedPalletColor(e.target.title)
                    }}  style={{
                        backgroundColor:value.color
                    }} title={value.text} className={`${ selectedPalletColor === colors[i].text  ? `outline ${selectedPalletColor === 'Black' ? 'outline-[#f1f1f1]' : 'outline-[#2f2f2c]'} outline-[.1rem]` : 'outline-none'} cursor-pointer h-[1rem] rounded-[50%]  w-[1rem] `}></li> : <li key={value.id} className="rounded-[50%] cursor-pointer h-[1rem] w-[1rem]" ><input onChange={(e)=>{
                        debounce(e)
                    }} className={`  h-[100%] w-[100%] `} type={value.color} /></li> 
                ))
            }
            </ul>
            <Range/>
        </div>
    )
 }
 export default Pallet