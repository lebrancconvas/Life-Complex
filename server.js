const express = require('express')
const app = express()
const port = 8010

app.get("/", (req, res, next) => {
    res.send("Hello Express.")
})

/* app.get("/params/:myparams", (req, res, next) => {
    res.send("<h1>OK, World.</h1>")
}) */

app.listen(port, () => {
    console.log(`Server Start at port ${port}`)
})