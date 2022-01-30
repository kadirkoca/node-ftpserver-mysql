const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })
const ftpServer = require("../app/ftp/ftpserver")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("../database")
db.sequelize.sync()
const webrouter = require("../routes/web.routes")
const apirouter = require("../routes/api.routes")

const app = express()

var corsOptions = {
    origin: process.env.FRONT_ORIGIN,
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use("/", webrouter)
app.use("/api", apirouter)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})