$(document).ready(function () {
    console.log(document.querySelector('header  button'));
    console.log('#botao-cancelar');


    // document.querySelector('header button').addEventListener('click', fuction(){

    // })

    // call back simplificado
    $('header button').click(function () {

        alert("Expandir formulario");
    })

})