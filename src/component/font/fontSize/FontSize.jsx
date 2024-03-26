import { MainContext } from "../../../context/MainContext"
import { useContext } from "react"
import { fontType } from "../../../assets/Data/infoData"
import { useRef } from "react"
import { themeProvider } from "../../theme/theme"
import { useArrayRef } from "../../../utils/useArrayRef"
import { $createParagraphNode, $getRoot, createCommand } from "lexical"
import { $createHeadingNode, $isHeadingNode, $createQuoteNode, $isQuoteNode } from '@lexical/rich-text'
import { $setBlocksType } from '@lexical/selection'
import { $getNearestNodeFromDOMNode } from 'lexical';
import {
  $isCodeNode, CodeNode,
  getLanguageFriendlyName,
  normalizeCodeLang, $isCodeHighlightNode, $createCodeNode
} from '@lexical/code'
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { $getSelection, $isParagraphNode, $isRangeSelection, $setSelection, ElementNode, FORMAT_ELEMENT_COMMAND, ParagraphNode, TextNode } from "lexical"

function FontSize({ x, y }) {
  const { fontSizeMenu, setNodeText, setFontSizeMenu } = useContext(MainContext)
  const fontSizeRef = useRef([])
  const fontSizeMenuRef = useRef()
  const [editor] = useLexicalComposerContext()
  function handleClick(...arg) {
    // arg[0] -> event
    // arg[1] -> object
    // arg[2] -> index iter
    setNodeText(arg[1].text)

    if (fontSizeRef.current[arg[2]]) {
      setFontSizeMenu(false)

      if (fontSizeRef.current[0].contains(arg[0].target)) {

      } else if (fontSizeRef.current[1].contains(arg[0].target)) {
        editor.update(() => {
          const selection = $getSelection()
          $setBlocksType(selection, () => $createHeadingNode('h1'))
        })

      }
      else if (fontSizeRef.current[2].contains(arg[0].target)) {
        editor.update(() => {
          const selection = $getSelection()
          $setBlocksType(selection, () => $createHeadingNode('h2'))
        })

      }
      else if (fontSizeRef.current[3].contains(arg[0].target)) {
        editor.update(() => {
          const selection = $getSelection()
          $setBlocksType(selection, () => $createHeadingNode('h3'))
        })

      }
      else if (fontSizeRef.current[4].contains(arg[0].target)) {

      }
      else if (fontSizeRef.current[5].contains(arg[0].target)) {
        editor.update(() => {
          const selection = $getSelection()
          $setBlocksType(selection, () => $createCodeNode())

        })
        console.log(CodeNode)
      }
    }
  }

  return (
    fontSizeMenu &&
    <div ref={fontSizeMenuRef} onClick={(e) => {
      if (fontSizeMenuRef === e.target) {
        setFontSizeMenu(true)
      }
    }} style={{
      top: `${y + 50}px`,
      left: `${x}px`
    }} className={` absolute    min-w-[15rem] max-h-[40rem] overflow-y-scroll scroll grid  w-fit items-center gap-[.01rem] bg-[#fffcfc] p-[.2rem] z-[1]  rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]`} >
      <div className=" flex justify-center flex-col p-2 gap-y-[.3rem] divide-y-[.01rem]  ">
        {
          fontType && fontType.map((value, i) => (
            <div ref={(el) => fontSizeRef.current[i] = el} key={i} onClick={(e) => handleClick(e, value, i)} className="flex cursor-pointer rounded hover:bg-[#96969643] gap-[1rem] items-center p-1" >{value.icon && < value.icon className={`${value.text === 'Title' && 'text-[2.5rem]'} ${value.text === 'Heading 1' && 'text-[2.2rem]'} ${value.text === 'Heading 2' && 'text-[1.9rem]'} ${value.text === 'Heading 3' && 'text-[1.6rem]'} ${value.text === 'Quote' && 'text-[1.6rem]'} ${value.text === 'Code' && 'w-[1.6rem] h-[1.6rem] '} `} />} <span className={`text-[1.5rem] ${value.text === 'Quote' && 'text-[1.2rem]'} ${value.text === 'Code' && 'text-[1.2rem]'} ${value.text === 'Code' && 'text-[1.2rem]'} `} >{value.text}</span></div>
          ))
        }
      </div>
    </div>
  )
}

export default FontSize
