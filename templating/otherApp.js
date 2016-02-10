var express = require('express');
var app = express();
var handlebars = require('express-handlebars');
var PORT = 8000;

app.engine('handlebars', handlebars({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

var icecreams = [ {name: 'vanilla', price: 10, awesomeness: 3}, 
                {name: 'chocolate', price: 4, awesomeness: 8}, 
                {name: 'banana', price: 1, awesomeness: 1}, 
                {name: 'greentea', price: 5, awesomeness: 7}, 
                {name: 'jawbreakers', price: 6, awesomeness: 2} ]; 



app.get('/icecream/:flavor', function(req, res){
  if (req.params.flavor === 'vanilla') {
    res.render('ice-cream', icecreams[0]);
  } else if (req.params.flavor === 'chocolate') {
    res.render('ice-cream', icecreams[1]);
  } else if (req.params.flavor === 'banana') {
    res.render('ice-cream', icecreams[2]);
  } else if (req.params.flavor === 'greentea') {
    res.render('ice-cream', icecreams[3]);
  } else if (req.params.flavor === 'jawbreakers') {
    res.render('ice-cream', icecreams[4]);
  };
});
 
app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
});