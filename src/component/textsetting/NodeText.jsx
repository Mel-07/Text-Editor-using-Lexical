import { useContext } from "react"
import { MainContext } from "../../context/MainContext"

function NodeText({textInfo}) {
    const {setNodeText,formatContent} =useContext(MainContext)
    const string_value = ['Heading-one','Heading-two','Heading-three']
    function handleClick(e){


        if(e.currentTarget.childNodes[0].data === string_value[0] ){
            formatContent.toggleIsHeadingOne(e)
        }
        else if(e.currentTarget.childNodes[0].data === string_value[1] ){
            formatContent.toggleIsHeadingTwo(e)
        }
        else if(e.currentTarget.childNodes[0].data === string_value[2] ){
            formatContent.toggleIsHeadingThree(e)
            console.log('3')
        }
    }
  return textInfo.map((textWords,i)=>(
            <button onClick={(e)=>{
                handleClick(e)
                setNodeText(e.currentTarget.childNodes[0].data)
              }} key={i} className={`${textWords === textInfo[1] && 'text-[2.2rem] font-medium'} ${textWords === textInfo[0] && 'text-[1rem] font-normal'} ${textWords === textInfo[2] && 'text-[1.7rem] font-normal'} ${textWords === textInfo[3] && 'text-[1.5rem] font-normal'} ${textWords === textInfo[4] && 'text-[1.3rem] font-normal'} text-nowrap`}>
                {textWords}
              </button>
        ))
    
  
}


export default NodeText
