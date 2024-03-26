import { useContext } from "react"
import { MainContext } from "../../../context/MainContext"

function Save() {
    const {canvasSaveRef} = useContext(MainContext)
  return (
    <button title="Save" className="hover:bg-[#6a9156e2] p-2 text-[1rem] font-medium rounded-md bg-[#6a915668] " ref={canvasSaveRef}>
        <span>Save</span>
    </button>
  )
}

export default Save
