var name = "Alex do Nascimeto de Sousa"

frase = "Vasco foi para a libertadores";

novaFrase = frase.replace("Vasco", "Flamengo")
console.log(novaFrase.toUpperCase());
console.log(novaFrase.toLowerCase());

var lista = ["maça", "uva", "pera", "laranja"];
var fruta = {nome: "Maçã", cor: "Vermelha", estado: "Madura"}
var frutas = [
     {nome: "Banana", cor: "Amarela" , estado: "Madura"}
    ,{nome: "Maçã"  , cor: "Vermelha", estado: "Madura"}
    ,{nome: "Melancia", cor: "Verde", estado: "Verde"}
    
  ]

console.log(lista[3])

lista.push("Goiaba");

console.log(lista);

lista.pop();

console.log(lista);

console.log(lista.length);

lista.reverse();

console.log(lista);

console.log(lista.toString())

console.log(lista.join(" - "));

console.log(fruta);
console.log(frutas);

var idade = prompt("Qual a sua idade?")

if (idade >= 18) {
  alert("Maior de idade!")
}else{
  alert("Menor de idade")
}

Alert ("Digital Innovation One:" + formacoes)


