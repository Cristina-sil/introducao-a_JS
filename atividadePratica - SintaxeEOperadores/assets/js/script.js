
var num1 = Number(prompt("Digite o primeiro número: \n"));
var num2 = Number(prompt("Digite o segundo número:\n"));
var comparador;

//Compara se dois números são iguais 
function comparador (num1,num2){
    let soma =  num1 + num2;
    //Comparação de tipo e valor
    (num1===num2)? comparador = "iguais" : comparador = "diferentes";
        if(soma < 10){
        return `Os números ${num1} e ${num2} são ${comparador}, e a soma é menor que 10 e menor que 20`;
        }
        else if (soma > 10 && soma<20){
            return `Os números ${num1} e ${num2} são ${comparador}, e a soma é maior que 10 e menor que 20`;
        } else if (soma > 20){
            return `Os números ${num1} e ${num2} são ${comparador}, e a soma é maior que 10 e maior que 20`;
        }
    
}

alert(comparador(num1,num2));

