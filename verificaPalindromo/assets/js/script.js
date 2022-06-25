//Solução 1
function verificaPalindromo(string){
    if(!string) return 'string inexistente';
    return string.split("").reverse().join("")===string;
}
//console.log(verificaPalindromo("AMA"));

//Solução 2

function verificaPalindromo2(string){
    if(!string) return "String inexistente";
    for (let i=0; i< string.length / 2; i++){
        if (string[i]!== string[string.length -1 -i]) {
            return false;
        }
    }
    return string.length;
}
console.log(verificaPalindromo2("ana"));