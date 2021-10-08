const openButton = document.querySelector('.button-for-a-hug')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close-button')

function openModal() {
    modal.classList.add('open')
}

function hideModal() {
    modal.classList.remove('open')
}

openButton.addEventListener('click',openModal)
closeButton.addEventListener('click',hideModal)
