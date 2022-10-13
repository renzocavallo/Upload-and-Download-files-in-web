import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGripLines} from "@fortawesome/free-solid-svg-icons"
import '../file/file.css'


function File(props){

    const deleteFile = () =>{
        
        fetch(`http://localhost:3010/files/delete/${props.id}/${props.nameFile}`,{
            method:'DELETE'
        })
    }

    const downloadFile = () => {
        const downloadInstance = document.createElement('a')
        downloadInstance.href = `http://localhost:3010/files/download/${props.nameFile}`
        document.body.appendChild(downloadInstance)
        downloadInstance.click()
        document.removeChild(downloadInstance)
    }

    return(
        <>
        <article>
            <h5>{props.nameFile}</h5>
            <FontAwesomeIcon className="lines-icon" icon={faGripLines} />
            <button id="bton-download" onClick={downloadFile}>Descarga</button>
            <button id="bton-delete" onClick={deleteFile}>Eliminar</button>
        </article>
        </>
    )
}

export default File