console.log('in server');

const contentDisposition = require('content-disposition');
const express = require ('express');
const app = express(); 
const PORT = 5000;
const mathProblems = [];


app.use(express.static('./server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/answers', (rep,res) =>{
    console.log('in the get/anwsers');
    res.send(mathProblems);
     calculations();
})

function calculations (calculation){
for (let number of calculation){
  if (number.mathSymbol === '+'){
     Number(number.numberOne + number.numberTwo)
 }else if (number.mathSymbol=== '-') {
     return Number(number.numberOne - number.numberTwo)
  } else if (number.mathSymbol === '*'){
     return Number(number.numberOne * number.numberTwo)
  } else if (number.mathSymbol === '/') {
     return Number(number.numberOne / number.numberTwo)
 }
}

}

app.post('/answers', (req,res) =>{
    console.log('in the post/answers', req.body);
    mathProblems.push(req.body);
    res.sendStatus(200);
})


app.listen(PORT, function () {
    })

