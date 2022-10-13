import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import File from "../file/index"
import "../filesPage/FilesPage.css"

function FilesPage() {
   
  const [files, setFiles] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3010/files/all").then(res=>res.json())
    .then(
        (result)=>{
            console.log(result)
            if(result){
                setFiles(result)
            }
        },
        (error)=>{
            console.log(error)
        }
    )
  })

  return (
   <>
   <h1>Contenedor de Archivos</h1>
   <section>
   {files.map(data => <File key={data["_id"]} nameFile={data["name"]} id={data["_id"]}/>)}
   </section> 
   <div>
   <img id="img-mongo" src= "mongo.png" alt="mongo" />
   <button id="bton-homePage"><Link to="/">Home Page</Link></button>
   </div>
   </>
  )
}

export default FilesPage