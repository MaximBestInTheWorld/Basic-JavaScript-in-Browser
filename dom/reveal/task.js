const advertising = document.querySelectorAll('.reveal');

function isVisible(el) {
    el.forEach((e) => {
    const { top, bottom } = e.getBoundingClientRect();

    if (bottom > 0 & top < window.innerHeight) {
        return e.classList.add('reveal_active');       
    }
    return e.classList.remove('reveal_active');  
})
}

document.addEventListener('scroll', function() {
    return isVisible(advertising);
})

