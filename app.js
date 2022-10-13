const express = require('express')

const routeFile = require('./routes/file')

const app = express();

app.use(express.static(__dirname + "/frontend/build"))

app.use('/files', routeFile)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/build", "index.html"))
})

const PORT = process.env.PORT || 3010;
app.listen(PORT);

module.exports = app