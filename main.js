import './style.css'


document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navbar').style.left = '0';
})

document.getElementById('close-nav').addEventListener('click', () => {
    document.getElementById('navbar').style.left = '-285px';
})
