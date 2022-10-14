
// disparando eventos na pagina com DOM

// exibir um alert ao clicar no botão 

function exibirAlert() {
    alert('você clicou no botão');
}
var botão = document.querySelector("#one");
botão.onclick = exibirAlert;

// alterando campo de input ao modificar seu valor

function changeinput() {
    console.log('viva a vida')
}

var camp = document.querySelector('.change');
camp.oninput = changeinput;




