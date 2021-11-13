console.log('in server');

const contentDisposition = require('content-disposition');
const express = require ('express');
const app = express(); 
const PORT = 5000;
const mathProblems = [];
const mathCalculations = [];


app.use(express.static('./server/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/answers', (rep,res) =>{
    console.log('in the get/anwsers');
    
})

app.post('/answers', (req,res) =>{
    console.log('in the post/answers');
    
})
app.listen(PORT, function () {

    
    })

