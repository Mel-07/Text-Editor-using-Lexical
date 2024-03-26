import Header from "../component/header/Header"
import { MainContext } from "../context/MainContext"
import"./style.css"
import { useContext} from "react"
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HeadingNode, QuoteNode, } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { ListNode, ListItemNode } from "@lexical/list";
import Draw from "../component/Draw/Draw"

import ContextMenu from "../component/context-menu/ContextMenu"
import {themeProvider} from '../component/theme/theme'
import TextColor from "../component/Textcolor/TextColor";
import Highlight from "../component/Highlight/Highlight";
import Upload from "../component/imageComponent/Upload";


function Layout() {

  const {closeAllMenu,textValue,setText,editorKeyEvent,formatContent,contextMenuElement, context,contextPosition,handleContextMenu,canvas} = useContext(MainContext)
  function onError(error) {
    console.error(error);
  }

  const initialConfig = {
    namespace: 'MyEditor',
    nodes:[HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,],
    theme:themeProvider,
    onError,
  };

  return (

    <div onClick={closeAllMenu} className=" overflow-clip  min-h-[100dvh]">
      {
         <Draw/>
      }
      <TextColor/>
      <Upload/>
      <Highlight/>
      <LexicalComposer initialConfig={initialConfig}  >
      <Header />
      <div   onClick={handleContextMenu}     ref={contextMenuElement}      className=" sm:max-w-[75.5rem] relative  p-2 mx-auto min-h-[100dvh]" >
      <RichTextPlugin
        contentEditable={<ContentEditable className=" overflow-clip editor-input md:w-[100%] lg:w-[100%] outline-none min-h-[70rem] p-2 mx-auto border-[#00000056] border" />}
        placeholder={<div className="editor-placeholder left-[100%]">Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
        <ContextMenu/>
        <HistoryPlugin/>
        <AutoFocusPlugin/>
      </div>
      </LexicalComposer>

    </div>
  )
}

export default Layout
