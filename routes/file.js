const express = require('express')
const router = express.Router()
const fs = require('fs')
const uploadFile = require('../middleware/multer')
const filesController = require('../controllers/filesController')

router.get('/all', filesController.getAllFiles)
router.post('/upload', uploadFile() ,filesController.create)
router.get('/download/:name', (req, res, next) => {
    res.download("./files/" + req.params.name, req.params.name, (e)=>{
        if(e){
           console.log(e)
        }else{
           console.log("Download")
        }
    })
})
router.delete('/delete/:id/:name', (req, res, next) =>{
    fs.unlinkSync(`./files/${req.params.name}`)
    next()
}, filesController.delete)
  
module.exports = router