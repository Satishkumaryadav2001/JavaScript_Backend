require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get('/about',(req,res)=>{
    res.send('About Page!');
})
app.get('/contact',(req,res)=>{
    res.send('Contact Page!');
})
app.get('/product',(req,res)=>{
    res.send('Product Page!');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(process.env)
})