const filesModel = require('../models/filesModel');

module.exports={

    getAllFiles: async function(req, res, next){
        try{
            const files = await filesModel.find()
            res.json(files)
        }catch(e){
            console.log(e)
        }
    },

    create: async function(req, res, next){
        try{
            const file = new filesModel({
                name: req.file.originalname,
                path: "./files/" + req.file.originalname
            })
            await file.save()
            res.redirect('/')

        }catch(e){
            console.log(e)
        }
    },

    delete: async function(req, res, next) {
        await filesModel.deleteOne({_id:req.params.id})
        res.redirect('/files')
    } 
}