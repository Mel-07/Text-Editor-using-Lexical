import { useContext } from "react"
import { MainContext } from "../../context/MainContext"

export function H1(props) {
  return (
    <h1 className=" text-[2rem]" {...props.attributes}>
      {props.children}
    </h1>
  )
}
export function H2(props) {
  return (
    <h2 className=" text-[1.6rem]" {...props.attributes}>
      {props.children}
    </h2>
  )
}
export function H3(props) {
  return (
    <h3 className=" text-[1.4rem]" {...props.attributes}>
      {props.children}
    </h3>
  )
}

export function P(props){
  return <p {...props.attributes}>{props.children}</p>
}
// for styling of text




