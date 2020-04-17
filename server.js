
const express = require('express')
const app = express()
const port = 3000
const bodyParser=require('body-parser')
const ejs = require('ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    let randomGenerator = Math.floor(Math.random()*100+1)
    res.render(__dirname+'/index', {randomGenerator})    
})

app.post('/',(req,res)=>{
    res.redirect('/')
})

app.listen(port, console.log('The server is listening ' + port))

let getRandom = max => Math.floor(Math.random()*Math.floor(max))
