const button = document.querySelector('button.greeting')
const head = document.querySelector('h1')
const head2 = document.querySelector('#header')
const submit = document.querySelector('#submitName')

const form= document.querySelector('#userForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const users = document.querySelector('#users')
    const f = ev.target
    const userName = f.userName.value
    const age = f.age.value
    users.innerHTML += '<p>' + userName + ', ' + age + '</p>'

    f.reset()
}
form.addEventListener('submit', handleSubmit )



//function changeText() {
 // head2.textContent = 'Clickity click'
//}

//const sub = document.forms[0].elements[0].value

// function submitButton() {
//     const sub = document.getElementById('submitName').innerHTML

//     head2.textContent = sub
// }

//button.addEventListener('click', changeText)
//button.addEventListener('click', submitButton)
