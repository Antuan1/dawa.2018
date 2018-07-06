const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extends: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use("", function(req, res, next){

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-type, Authorization, Content-length, X-Requested-with ');
	next();
	});
app.options("/*", function(req, res, next){
	res.setStatus(200);

});

const router = express.Router();

router.get('', function(req,res){
	res.json({ message: 'genial! bienvenido a nuestra api!'});

});
const userRouter = require('../routes/user');
router.use('/user', userRouter);
//Registramos nuestars rutas
app.use('/api', router);
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dawa-blog');
mongoose.Promise = global.Promise;

app.listen(port);
console.log('La magia en el puerto ' + port);