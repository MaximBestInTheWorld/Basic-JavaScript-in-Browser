const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let index = 1; index <=9; index++) {
    const animal = document.getElementById(`hole${index}`);
    animal.onclick = () => {
        if (animal.className.includes("hole_has-mole")) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (Number(dead.textContent) === 10) {
            alert ("Вы выиграли");
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (Number(lost.textContent) === 5) {
            alert ("Вы проиграли");
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}