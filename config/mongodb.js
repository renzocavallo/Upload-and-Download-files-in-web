const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/upload_files",function(error){
    if(error){
        throw error
    }else{
        console.log("Conectado con Mongo Db")
    }
})

module.exports = mongoose