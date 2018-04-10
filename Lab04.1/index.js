var express = require('express')
var app = express()
app.use('/static',express.static('public'))


app.use(function(err,res,req,next){
	console.error(err.stack)
	res.status(500).send('Algo salio mal')
})



app.get('/',function (req,res){
	res.send('Hola Mundo! en Express:')
})

app.post('/',function (req,res){
	res.send('Llamada Post misma url')
})

app.put('/user',function (req,res){
	res.send('Recibimos un put en /User')
})

app.delete('/User',function (req,res){
	res.send('Recibimos un DELETE en /user')
})
app.use(function(res, req, next){
	res.status(404).send("Esto no existe!")
})

app.listen(3000,function(){
	console.log('Aplicacion de ejemplo ejecutando en el puerto 3000!')
});