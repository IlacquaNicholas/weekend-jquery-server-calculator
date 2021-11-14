$(document).ready(onReady);
let mathSymbol;
let number = 0;
function onReady (){
    $('#equals').on('click', postAnswer)
    $('#addition').on('click', addOnClick)

}

function addOnClick (){
    mathSymbol = '+'
}


function postAnswer (){
// console.log('postAnswer is working');
let mathEquationSend = {
    numberOne: $('#numberOne').val(),
    mathSymbol: mathSymbol,
    numberTwo: $('#numberTwo').val(),
    results: number
} 
$.ajax({
    method: 'POST', 
    url: '/answers', 
    data: mathEquationSend
}).then (function(response){
    console.log(response);
    
    $('#numberOne').val('');
    $('#numberTwo').val('');
    $('#Total').empty();
    $('#Total').append(`Total: ${response.data}`);
    getCalcutation()
}).catch (function (error){
    console.log('not working');
    
})
}

function getCalcutation (){
    $.ajax({
        method:'GET', 
        url: '/answers'
    }).then(function(response){
        let mathProblemsel = $('#mathProblems')
        mathProblemsel.empty();
        console.log(response);
        
        for(let solution of response.data){
            mathProblemsel.append(`
            <li>
            ${solution.numberOne} 
            ${solution.mathSymbol}
            ${solution.numberTwo}
            ${solution.results}
            </li>
              `)
        }
})}