import { useContext } from "react"
import { MainContext } from "../../../context/MainContext"


function Range() {
  const {range,setRange} = useContext(MainContext)
  return (
    <div className="flex item-center gap-4">
      <input onChange={(e)=>setRange(e.target.value)} type="range" min={0} max={100} value={range} name="" id="" />
      <span>{range}</span>
    </div>
  )
}

export default Range
