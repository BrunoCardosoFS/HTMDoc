import './style.css'
import './print.css'

document.querySelector<HTMLElement>('#files')!.innerHTML = `
<span>Files</span>
`

document.querySelector<HTMLElement>('#editor')!.innerHTML = `
<span>Editor</span>
`

document.querySelector<HTMLDivElement>('#render')!.innerHTML = `
<span>Render</span>
`
