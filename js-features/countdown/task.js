const element = document.getElementById('timer');
let timer = setInterval(() => {
    element.textContent = Number(element.textContent)-1;
    if(Number(element.textContent) === 0) {
        alert ('Вы победили в конкурсе');
        clearInterval(timer);
    }
},1000);
