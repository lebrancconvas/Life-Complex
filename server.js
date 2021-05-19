const express = require('express')
const app = express()
const port = 8010

app.get("/", (req, res, next) => {
    res.send("Hello Express.")
})

app.get("/params/:myparams", (req, res, next) => {
    res.send(`Hello ${req.params.myparams} I am ${req.query.weare}`)
})

app.listen(port, () => {
    console.log(`Server Start at port ${port}`)
})