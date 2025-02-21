const element = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
cookie.onclick = () => {
    element.textContent = Number(element.textContent) + 1;
    if (cookie.width === 200) { 
    cookie.width = 150;
    }
    else if (cookie.width === 150) { 
        cookie.width = 200;
        }
}