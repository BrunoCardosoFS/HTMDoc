import './style.css'
import './print.css'

import * as monaco from 'monaco-editor'
import { emmetHTML } from 'emmet-monaco-es'

document.querySelector<HTMLElement>('#files')!.innerHTML = `
<span>Files</span>
`

document.querySelector<HTMLElement>('#editor')!.innerHTML = ``

document.querySelector<HTMLDivElement>('#render')!.innerHTML = `
<span>Render</span>
`

monaco.editor.create(document.querySelector<HTMLElement>('#editor')!, {
    value: '',
    language: 'html',
    theme: "vs-dark"
});

emmetHTML(monaco, ["html", "css"])