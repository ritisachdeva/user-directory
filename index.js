const form= document.querySelector('form#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const users = document.querySelector('#users')
    const f = ev.target
    const userName = f.userName.value
    const age = f.age.value
    const favoriteColor = f.favoriteColor.value


    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '

    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorItem.appendChild(colorDiv)

    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    users.appendChild(list)


    f.reset()
    f.userName.focus()
}
form.addEventListener('submit', handleSubmit )

function renderColor(){
    const renderDiv = document.createElement('div')

    colorItem.appendChild(renderDiv)
}




