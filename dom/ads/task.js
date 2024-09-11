function next() {
    const changeWords = document.querySelectorAll('.rotator__case');
    const changeWordsActive = document.querySelector('.rotator__case_active');

    const activeCounter = Array.from(changeWords).indexOf(changeWordsActive);
    changeWordsActive.classList.remove('rotator__case_active');
    const counter = (activeCounter + 1) % changeWords.length;
    changeWords[counter].classList.add('rotator__case_active');
}

setInterval(next, 1000);