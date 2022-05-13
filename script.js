
const toggleButton = document.getElementsByClassName('toggle')[0]
const links = document.getElementsByClassName('topNavLinks')[0]

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active')
})