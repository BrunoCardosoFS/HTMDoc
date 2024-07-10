import './style.css'
import './print.css'

import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

import { emmetHTML } from 'emmet-monaco-es'

document.querySelector<HTMLElement>('#files')!.innerHTML = `
<span>Files</span>
`

document.querySelector<HTMLElement>('#editor')!.innerHTML = `
<span id="loading">Loading...</span>
`

document.querySelector<HTMLDivElement>('#render')!.innerHTML = `
<span>Render</span>
`


self.MonacoEnvironment = {
    getWorker(_, label) {
        if (label === 'json') {
            return new jsonWorker()
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new cssWorker()
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new htmlWorker()
        }
        if (label === 'typescript' || label === 'javascript') {
            return new tsWorker()
        }
        return new editorWorker()
    }
}


var editor = monaco.editor.create(document.querySelector<HTMLElement>('#editor')!, {
    value: '',
    language: 'html',
    theme: "vs-dark"
});
emmetHTML(monaco, ["html", "css"])
document.querySelector<HTMLElement>('#loading')?.setAttribute("style", "display:none;")



document.getElementById("getContent")?.addEventListener("click", function(){
    console.log(editor.getValue())
})


