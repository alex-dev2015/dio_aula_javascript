function soma(n1 , n2){
    return n1 + n2;
}

function validateYear(idade){
    var validar;
    if (idade >= 18) {
        validar = true;
    }else{
        validar = false;
    }

    return validar;
}

function clicar(){
    var elemento = document.getElementById("agradecimento");

    elemento.innerHTML = "<b>Obrigado por clicar!</b>"
    
}

function redirecionar(){
    window.open("https://alexsousa.eti.br")
}

function trocar(){
    var data = document.getElementById("passe");
    data.innerHTML = "Obrigado por passar!";
}

console.log(soma(5,10));

function desafio1(a,b){
    var total = a + b;
    return "X = " + total
}

console.log(desafio1(11,7))
console.log(desafio1(-11,6))
console.log(desafio1(11, -2))

// var idade = prompt("Qual a sua idade?");

// console.log(validateYear(idade));

