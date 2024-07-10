import './style.css'
import './print.css'

document.querySelector<HTMLElement>('#files')!.innerHTML = `
<span>Files</span>
`

document.querySelector<HTMLElement>('#editor')!.innerHTML = `
<span id="loading">Loading...</span>
`

document.querySelector<HTMLDivElement>('#render')!.innerHTML = `
<span>Render</span>
`

import loadEditor from './components/editor'
loadEditor("#editor")
document.querySelector<HTMLElement>('#loading')?.setAttribute("style", "display:none;")