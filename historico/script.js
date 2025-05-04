const form = document.querySelector('#form')
const goOutButton = document.querySelector('#Sair')
const deleteButton = document.querySelector('#delete')
const historyContainer = document.querySelector('#history')
const ListHistory = document.querySelector('#historicoList')

function ButtonHistory(){    
    form.style.display = 'none'
    ListHistory.style.display = 'block'
}

function exitButton(){
    form.style.display = 'block'
    ListHistory.style.display = 'none'
}

function StorageHistoryUser(){
    const history = JSON.parse(localStorage.getItem('userHistory')) || []
    const list = document.querySelector('#list')
    list.innerHTML = ''
    history.forEach((item, index) => {
        const option = document.createElement('option')
        option.value = item
        option.textContent = item
        list.appendChild(option)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const textInput = document.querySelector('#text')
    let history = JSON.parse(localStorage.getItem('userHistory')) || []
    history.push(textInput.value)
    localStorage.setItem('userHistory', JSON.stringify(history))
    textInput.value = ''
    StorageHistoryUser()
    console.log(history)
})

deleteButton.addEventListener('click', () => {
    localStorage.removeItem('userHistory')
    StorageHistoryUser()
})

goOutButton.addEventListener('click', exitButton)
historyContainer.addEventListener('click', ButtonHistory)


document.addEventListener('DOMContentLoaded', () => {
    ListHistory.style.display = 'none'
    StorageHistoryUser()
})