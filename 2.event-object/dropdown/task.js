const value = document.getElementsByClassName('dropdown__value')[0];
const list = document.getElementsByClassName('dropdown__list')[0];
const link = document.getElementsByClassName('dropdown__link');

value.onclick = () => {
    list.classList.toggle('dropdown__list_active');
}

for (let i = 0; i < link.length; i++)
    link[i].addEventListener('click', function(event) {
    event.preventDefault();
    list.classList.remove('dropdown__list_active');
    value.textContent = this.textContent;
  });