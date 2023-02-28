const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'You are cool',
    'All is possible',
    'G-d believe in you',
    'Today is the best day',
    'Go full force',
    'Rejoice in the little things',
    'All goes to good'
]

btn.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}