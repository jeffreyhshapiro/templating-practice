var express = require('express');
var app = express();
var PORT = 8100;

app.get("/:mathName/:numberOne/:numberTwo", function(req, res){
  if (req.params.mathName == "addition") {
    var sum = parseInt(req.params.numberOne) + parseInt(req.params.numberTwo);
    res.send("The addition of "+req.params.numberOne+ " and " +req.params.numberTwo+ " is " +sum);
  } else if (req.params.mathName == "subtract") {
    var diff = parseInt(req.params.numberOne) - parseInt(req.params.numberTwo);
    res.send("The difference of "+req.params.numberOne+ " and " +req.params.numberTwo+ " is " +diff);
  } else if (req.params.mathName == "multiply") {
    var product = parseInt(req.params.numberOne) * parseInt(req.params.numberTwo);
    res.send("The product of "+req.params.numberOne+ " and " +req.params.numberTwo+ " is " +product);
  } else if (req.params.mathName == "divide") {
    var quotient = parseInt(req.params.numberOne) / parseInt(req.params.numberTwo);
    res.send("The quotient of "+req.params.numberOne+ " and " +req.params.numberTwo+ " is " +quotient);
  } else if (req.params.mathName == "exp") {
    var exp = Math.pow(parseInt(req.params.numberOne), parseInt(req.params.numberTwo));
    res.send(req.params.numberOne+ " raised to the " +req.params.numberTwo+ "th power is " +exp);
  }
})

app.listen(PORT, function(){
  console.log("listening on port %s", PORT)
})