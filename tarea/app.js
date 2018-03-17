const express = require('express');
const app = express();
var http = require('http');
fs = require ('fs');


app.use(express.static('public'));


app.get('/', (req,res) =>{
	res.end('funciona');
});

alert(mensaje para la empresa)

var html = fs.readFileSync('./contactanos.html');

http.createServer(function(solicitud,respuesta){
	fs.readFile('./index.html',function(error,html){
		respuesta.write(html);
		respuesta.end();		
	});
});


app.listen(3000, () =>{
	console.log('servidor iniciado');
});
