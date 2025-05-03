//1 - Inserir dado
localStorage.setItem("nome", "João")

//2 - Restart sem perder os dados

//3 - Resgatar itens
const name = localStorage.getItem("nome")
console.log(name)

//4 - Resgate de item que não existe
const lastName = localStorage.getItem('lastname')
console.log(lastName)

if(!lastName){
    console.log('Sem sobrenome')
}

//5 - Remover item
localStorage.removeItem('nome')

//6 - Limpar todos os itens
localStorage.setItem('a', 1)
localStorage.setItem('b', 2)

//console.log(typeof localStorage.getItem('a')) <- string

localStorage.clear()

//7 - session storage
sessionStorage.setItem('number', 321)

//8 - reniciar e perder dados
const n = sessionStorage.getItem('number')
console.log(n)

//sessionStorage.removeItem('number')
sessionStorage.clear()

//9 - salvar objetos
const person = {
    name: 'João',
    age: 19,
    city: 'Teresina',
    job: 'dev'
}

//localStorage.setItem('person', person) <- não é funcional...

localStorage.setItem('person', JSON.stringify(person)) // <- Método correto!

const getPerson = localStorage.getItem('person')
console.log(getPerson)

const personOBJ = JSON.parse(getPerson)

console.log(typeof personOBJ)
console.log(personOBJ.city)
console.log(personOBJ.name)
console.log(personOBJ.age)
console.log(personOBJ.job)