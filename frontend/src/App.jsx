import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./components/homePage/index"
import FilesPage from "./components/filesPage/index"

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/files" element={<FilesPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
