//test S2
const express = require('express')
const app = express()
//step2
const parkings =require('./parkings.json')

//step4 //middleware
app.use(express.json())

//step1 //Get
app.get ('/parkings', (req,res)=> {
//step1
//res.send("Liste des parkings")
//step2
res.status(200).json(parkings)
})
 //step3
app.get('/parkings/:id', (req,res) => {
   const id = parseInt(req.params.id)
   const parking = parkings.find(parking=>parking.id === id)
   res.status(200).json(parking)
})

//step5 //post
app.post('/parkings',(req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

//step6 //PUT //vérifier l'emplacement
app.put ('/parkings/:id', (req,res) => {
    const id = parseInt (req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)
})

//step7 //Delete
app.delete('/parkings/:id', (req,res)=> {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.slice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})

//step0
app.listen(8080, () => {
console.log ('Serveur à l\'écoute')
})
