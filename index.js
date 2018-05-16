const form= document.querySelector('form#userForm')

function renderColor(){
    const favoriteColor = form.favoriteColor.value
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    
    return colorDiv
    
}

function renderListItem(list){
    const userName = form.userName.value
    const age = form.age.value

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '

    list.appendChild(nameItem)
    list.appendChild(ageItem)
    colorItem.appendChild(renderColor())
    list.appendChild(colorItem)

    users.appendChild(list)

}

function renderList() {
    const list = document.createElement('ul')
    renderListItem(list)
}

const handleSubmit = function(ev){
    ev.preventDefault()

    const userName = form.userName.value
    const age = form.age.value
    const favoriteColor = form.favoriteColor.value
    const users = document.querySelector('#users')
    //const f = ev.target
    
    renderList()

    //const list = document.createElement('ul')

    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit )




