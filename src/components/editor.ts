import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import { emmetHTML } from 'emmet-monaco-es'

export default function loadEditor(selector: string){
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

    var editor = monaco.editor.create(document.querySelector<HTMLElement>(selector)!, {
        value: '',
        language: 'html',
        theme: "vs-dark",
        wordWrap: "on"
    });
    emmetHTML(monaco, ["html", "css"])
    
    document.getElementById("renderContent")?.addEventListener("click", function(){
        document.querySelector<HTMLDivElement>('#render')!.innerHTML = editor.getValue();

        // var valueEditor = editor.getValue()
        // console.log(valueEditor)

        // fetch("http://localhost:3000/data", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         html: valueEditor
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
        // .then((response) => response.blob())
        // .then((blob) => {
        //     const url = window.URL.createObjectURL(blob);  // Cria uma URL para o Blob
        //     const a = document.createElement("a");  // Cria um elemento <a>
        //     a.style.display = "none";
        //     a.href = url;
        //     a.download = "response.pdf";  // Nome do arquivo para download
        //     document.body.appendChild(a);
        //     a.click();  // Força o clique no link para download
        //     window.URL.revokeObjectURL(url);  // Libera a URL do Blob
        // })
        // .catch((error) => {
        //     console.error(error)
        // })
    })

}