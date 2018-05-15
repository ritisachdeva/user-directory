const button = document.querySelector('button.greeting')
const head = document.querySelector('h1')

function changeText() {
    head.textContent = 'Clickity click'
}

button.addEventListener('click', changeText)
