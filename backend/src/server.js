require('dotenv').config()
const app= require('./app')
const connectDB= require("./db/db")

connectDB()
app.listen(5000, ()=>{
console.log("server is running!!!")
}) // server on hogyaa