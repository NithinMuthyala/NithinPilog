const express = require('express')
const mongoose = require('mongoose')
const app = express()
const data = require('./models/db')
const cors = require('cors')

app.use(express.json())
app.use(cors("*"))

mongoose.connect("mongodb+srv://muthyal1996:Nithin123@nithin.you9vdw.mongodb.net/?retryWrites=true&w=majority").then(
    () => {
        console.log('Db Connected')
    })
    .catch((err) =>  {
        console.log(err)
    })
app.listen(4011, () => {
    console.log('App is Running at 4011')
})

app.get("/",(req,res) =>  {

    res.send("Success")
})

app.get("/getdata" ,(req,res) => {
    res.json(data.findall())
})

app.post("/signup" , async (req,res) => {
    console.log(req.body)
    const{title,description} = req.body 
    const newData =  new data({
        title:title,
        description:description
    })
    await newData.save()
    res.send('Data Uploaded Sucesss')
})

