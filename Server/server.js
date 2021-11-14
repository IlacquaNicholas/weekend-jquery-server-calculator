console.log('in server');

const contentDisposition = require('content-disposition');
const express = require ('express');
const app = express(); 
const PORT = 5000;
const mathProblems = {data:[]};
let total = {data:0}


app.use(express.static('./server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/answers', (req,res) =>{
    console.log('in the get/anwsers');
    res.send(mathProblems);
    
})

function calculations(mathProblem){
    if (mathProblem.mathSymbol == '+'){
        mathProblem.results = Number(mathProblem.numberOne) + Number(mathProblem.numberTwo)
        total.data = mathProblem.results = Number(mathProblem.numberOne) + Number(mathProblem.numberTwo)
        mathProblems.data.push(mathProblem)
    } else if (mathProblem.mathSymbol == '-') {
        mathProblem.results = Number(mathProblem.numberOne) - Number(mathProblem.numberTwo)
        total.data = mathProblem.results = Number(mathProblem.numberOne) - Number(mathProblem.numberTwo)
        mathProblems.data.push(mathProblem)
    } else if (mathProblem.mathSymbol == '*') {
        mathProblem.results = Number(mathProblem.numberOne) * Number(mathProblem.numberTwo)
        total.data = mathProblem.results = Number(mathProblem.numberOne) * Number(mathProblem.numberTwo)
        mathProblems.data.push(mathProblem)
    } else if (mathProblem.mathSymbol == '/') {
        mathProblem.results = Number(mathProblem.numberOne) / Number(mathProblem.numberTwo)
        total.data = mathProblem.results = Number(mathProblem.numberOne) / Number(mathProblem.numberTwo)
        mathProblems.data.push(mathProblem)
    }
    console.log(mathProblems);
    
}

app.post('/answers', (req,res) =>{
    console.log('in the post/answers', req.body);
    calculations(req.body);
    res.send(total);
})


app.listen(PORT, function () {
    })

