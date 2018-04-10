var express = require('express')
var app = express()




app.get('/',function (req,res){
	res.send('Hola Mundo! en Expredsfreherss:')
})


app.use(function(res, req, next){
	res.status(404).send("Esto no existe!")
})

app.listen(3000,function(){
	console.log('Aplicacion de ejemplo ejecutando en el puerto 3000!')
});