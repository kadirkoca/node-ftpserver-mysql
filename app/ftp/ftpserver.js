const FtpSrv = require("ftp-srv")
const fileStream = require("fs")
const MainController = require("./controllers/main.controller")

const port = 21
const filePath = process.env.FTP_ROOT

const ftpServer = new FtpSrv({
    url: "ftps://0.0.0.0:" + port,
    anonymous: false,
})

const loadNotes = (file) => {
    try {
        const dataBuffer = fileStream.readFileSync(file)
        const dataJSON = dataBuffer.toString()
        return dataJSON
    } catch (e) {
        return { error: e}
    }
}

ftpServer.on("login", ({connection, username, password}, resolve, reject) => {
    connection.on('STOR', (error, fileName) => { // upload
        const text = loadNotes(fileName)
        if(!text.error)MainController.create(text)
    })
    connection.on('RETR', (error, fileName) => { // download
        console.log("RETR->"+fileName)
    })


    if (username === "kadirftp" && password === "kadirftppassword") {
        return resolve({ root: filePath })
    }
    return reject("Invalid username or password")
})

ftpServer.listen().then(() => {
    console.log("Ftp server is starting...")
})

module.exports = ftpServer