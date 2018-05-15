const button = document.querySelector('button.greeting')
const head = document.querySelector('h1')
const head2 = document.querySelector('#header')
function changeText() {
    head2.textContent = 'Clickity click'
}

button.addEventListener('click', changeText)
