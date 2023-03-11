
class Estudante{
    constructor(nome,email,RA,curso,diciplinas){
        this.nome = nome
        this.email= email
        this.RA = RA
        this.curso = curso
        this.diciplinas = diciplinas
    }
}
const aluno1 = new Estudante("Franciele","franciele.brandao@hotmail.com","1050482123019","ADS",["WEB","Estrutura de Dados","Interação Humano e Computador"])
const aluno2 = new Estudante("Guilherme","guizinhodograu@hotmail.com","1050482123022","ADS",["Matematica Discreta","Inglês","POO"])

console.log(aluno1)
console.log(aluno2)



/*
const lista = ["Item1", "Item2", "Item3"]

const mt= [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//console.log(lista[0])

//console.log(mt[1][1])

mt.forEach(function(item){
    item.forEach(function(valor){
        console.log(valor)
    })
})


// item.forEach(item => console.log(item))  // simplificação do código acima


const pessoa1= {
    nome: " Teste",
    idade: 20
}

console.log(pessoa1.idade) // ponto+idade = esta busacando o atributo.

pessoa1.nome= "Teste2"
pessoa1.cpf= "122345689"

console.log(pessoa1)


class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }


    podeDirigir(){

    return (this.idade >18) ? "Pode" : "Não Pode"   // igual if else
    }

}
const pessoa2 = new Pessoa("Nome da pessoa 2",35)
pessoa2.nome = "Testatesta"
pessoa2.cpf = "xxxx"

console.log(pessoa2)
console.log("Pode dirigir ? ", pessoa2.podeDirigir())

*/





