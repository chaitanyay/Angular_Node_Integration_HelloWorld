var express  = require('express');
var app      = express(); 								
var port  	 = process.env.PORT || 8081; 				

var morgan = require('morgan'); 		
var bodyParser = require('body-parser');
var methodOverride = require('method-override'); 

app.use(express.static(__dirname + '/public')); 				
app.use(morgan('dev')); 										
app.use(bodyParser.urlencoded({'extended':'true'})); 			
app.use(bodyParser.json()); 									
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

require('./app/routing.js')(app);

app.listen(port);
console.log("App listening on port " + port);
