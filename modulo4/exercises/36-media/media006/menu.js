function width() {
    if (window.innerWidth >= 768) {
        links.style.display = 'block'
    
    } else {
        links.style.display = 'none'
    }
}

menu.addEventListener('click', () => {
    let image = document.querySelector('img');

    if (links.style.display == 'block') {
        image.src = './images/menu.svg'
        links.style.display = 'none'
    
    } else {
        image.src = './images/close.svg'
        links.style.display = 'block'
    }
})

