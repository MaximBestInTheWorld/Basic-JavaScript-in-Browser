let form = document.querySelector('form')
let input = document.querySelector('.tasks__input')
let list = document.querySelector('.tasks__list')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim().length != 0) {
    list.insertAdjacentHTML('afterbegin', `
    <div class="task">
    <div class="task__title">${input.value}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`);
    let tasks = document.querySelectorAll('.task')

    tasks.forEach((step) => {
      step.lastElementChild.onclick = (e) => {
        e.preventDefault();
        step.remove();
      }
    })
    form.reset()
  }
})