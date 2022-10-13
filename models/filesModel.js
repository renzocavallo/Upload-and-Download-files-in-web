const mongoose = require('../config/mongodb')

const fileSchema = mongoose.Schema({
    name:{
        type: String
    },
    path:{
        type: String
    }
})

module.exports = mongoose.model('files',fileSchema)