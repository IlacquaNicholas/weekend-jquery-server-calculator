$(document).ready(onReady);

function onReady (){
    $('#equals').on('click', postAnswer)
    $('#addition').on('click', addOnClick)

}
let mathSymbol;
function addOnClick (){
    mathSymbol = '+'
}


function postAnswer (){
// console.log('postAnswer is working');
let mathEquationSend = {
    numberOne: $('#numberOne').val(),
    mathSymbol: mathSymbol,
    numberTwo: $('#numberTwo').val(),
    results: '0',
} 
$.ajax({
    method: 'POST', 
    url: '/answers', 
    data: mathEquationSend
}).then (function(response){
    $('#numberOne').val(''),
    $('#numberTwo').val('')
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
        for(let solution of response){
            mathProblemsel.append(`
            <li>${solution.numberOne} 
                ${solution.mathSymbol}
                ${solution.numberTwo}
            </li>
              `)
        }
})}