const express = require("express")
const router = new express.Router()

router.get("/", (req, res) => {
    res.json({ message: "Welcome FTP-SERVER & MySQL" })
})

module.exports = router