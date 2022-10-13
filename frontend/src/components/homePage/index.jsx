import React from "react";
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faReact, faNode} from '@fortawesome/free-brands-svg-icons';
import '../homePage/homePage.css'

function HomePage() {
  return (
   <>
   <h1>Guardar archivos en servidor</h1>
   <form action="/files/upload" method='post' enctype="multipart/form-data">
       <input id="file" type="file" name="uploadFile"/>
       <input id="bton" type="submit" value="Guardar"/>
   </form>
   <button id="bton-files">
    <Link to="/files">Archivos</Link>
   </button>
   <FontAwesomeIcon id="react" icon={faReact} />
   <FontAwesomeIcon id="node" icon={faNode} />
   <h2>By Renzo Cavallo</h2>
   </>
  )
}

export default HomePage