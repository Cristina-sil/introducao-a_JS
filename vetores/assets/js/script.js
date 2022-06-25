
function verificavetor(vetor){
   if (!vetor.length)return -1;
    for (let i = 0; i <vetor.length; i++){
        if ((vetor[i] % 2 == 0) || vetor[i]!==0){
            vetor[i] = 0;
        }
    }
    return vetor;
}
vetor = [0,1,3,4];
console.log(verificavetor(vetor));

