const alunos = [
    {
        nome: 'Ana',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Rosália',
        nota: 9,
        turma: '3b',
    },
    {
        nome: 'Lucas',
        nota: 10,
        turma: '2A',
    },
];

//Atividade 1: Alunos Aprovados
function alunosAprovados(alunos,mediaFinal){
    let aux = [];
    for (let i = 0; i < alunos.length; i++ ){
        const {nota,nome} = alunos[i];
        if (nota >= mediaFinal){
            aux.push(nome);
        }
    }
    //Retorna somente os alunos aprovados. 
    return aux;
}

console.log(alunosAprovados(alunos,7)) 
//Atividade 2: This

const pessoa1 = {
    nome: "Bia",
    idade: 18,
};

const pessoa2 = {
    nome: "Luana",
    idade: 18,
};

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "pug",
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1,15));
console.log(calculaIdade.apply(pessoa2,[7]));



