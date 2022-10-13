const multer = require('multer')

function uploadFile(){

const storage = multer.diskStorage({
    destination: './files',
    filename: function(req, file, cb){
      cb(null, file.originalname) 
    }
  }); 

const upload = multer({storage}).single('uploadFile')

return upload

}

module.exports = uploadFile