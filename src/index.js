import "./index.css";

const plusBtn = document.getElementById('plus-btn')
const msgBtn = document.getElementById('msg-btn')
const notificationBtn = document.getElementById('notification-btn')
const moreBtn = document.getElementById('more-btn')

const plusPanel = document.getElementById('plus-panel')
const msgPanel = document.getElementById('msg-panel')
const notificationPanel = document.getElementById('notification-panel')
const morePanel = document.getElementById('more-panel')

const panels = [plusPanel, msgPanel, notificationPanel, morePanel]

function openPanel(index) {
    panels.forEach((p, idx ) => {
        if (index === idx) {
            p.classList.remove('hidden')
            return;
        }

        if (p.classList.contains('hidden')) {
            return;
        }

        p.classList.add('hidden')
    })
}

window.addEventListener('click',function() {
    console.log('window');
    // plusPanel.classList.add('hidden')
    // msgPanel.classList.add('hidden')
    // notificationPanel.classList.add('hidden')
    // morePanel.classList.add('hidden')
    openPanel(-1)
})

plusBtn.addEventListener('click',function(event) {
    event.stopPropagation()
    console.log('plusBtn');
    // plusPanel.classList.remove('hidden')
    openPanel(0)
})

plusPanel.addEventListener('click',function(event) {
    event.stopPropagation()
})

msgBtn.addEventListener('click',function(event) {
    event.stopPropagation()
    console.log('msgBtn');
    // msgPanel.classList.remove('hidden')
    openPanel(1)
})

msgPanel.addEventListener('click',function(event) {
    event.stopPropagation()
})

notificationBtn.addEventListener('click',function(event) {
    event.stopPropagation()
    console.log('notificationBtn');
    // notificationPanel.classList.remove('hidden')
    openPanel(2)
})

notificationPanel.addEventListener('click',function(event) {
    event.stopPropagation()
})

moreBtn.addEventListener('click',function(event) {
    event.stopPropagation()
    console.log('moreBtn');
    // morePanel.classList.remove('hidden')
    openPanel(3)
})

morePanel.addEventListener('click',function(event) {
    event.stopPropagation()
})