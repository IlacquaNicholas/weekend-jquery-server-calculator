$(document).ready(onReady);

function onReady (){
    $('#equals').on('click', postAnswer)
    
}

function postAnswer (){
// console.log('postAnswer is working');
let mathEquationSend = {
    numberOne: $('#numberOne').val(), 
    numberTwo: $('#numberTwo').val()
}
    
}$.ajax({
    method: 'POST', 
    url: '/answers', 
    data: mathEquationSend
}).then (function(response){
    $('#numberOne').val(''),
    $('#numberTwo').val('')
    
}).catch (function (error){
    console.log('not working');
    
})