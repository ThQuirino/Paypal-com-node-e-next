const express=require("express")
const {Routes}=require('express')
const routes=express.Router()
const comprar=require('./controllers/comprar')
const payconfig=require("paypal-rest-sdk")
const { eventNames } = require("./connect")
console.log(process.env.client_secret)
payconfig.configure({
    "mode":"sandbox",
    "client_id":process.env.client_id,
    "client_secret":process.env.client_secret
})
routes.post('/gui',comprar.index);
routes.get('/list',comprar.Listen);
module.exports=routes;