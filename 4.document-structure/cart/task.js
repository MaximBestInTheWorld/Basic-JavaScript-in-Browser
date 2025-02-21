let product = document.querySelectorAll('.product')
let image = document.querySelectorAll('.product__image')
let add = document.querySelectorAll('.product__add')
let products = document.querySelector('.cart__products')

let controlInc = document.querySelectorAll('.product__quantity-control_inc')
let controlDec = document.querySelectorAll('.product__quantity-control_dec')
let value = document.querySelectorAll('.product__quantity-value')

controlInc.forEach((inc, index) => {
  inc.onclick = () => {
    let counter = Number(value[index].textContent);
    value[index].textContent = counter + 1;
  }
})

controlDec.forEach((dec, index) => {
  dec.onclick = () => {
    let counter = Number(value[index].textContent);
    value[index].textContent = counter - 1;
    if (counter == 1) {
      value[index].textContent = 1;
    }
  }
})

add.forEach((add, index) => {
  add.onclick = () => {
    let carts = document.querySelectorAll('.cart__product')
    const array = Array.from(carts)
    const inCart = array.find(prod => prod.getAttribute('data-id') == product[index].getAttribute('data-id'));
    if (inCart) {
      inCart.children[1].textContent = Number(inCart.children[1].textContent) + Number(value[index].textContent);
    } else {
      products.insertAdjacentHTML('beforeend', `
      <div class="cart__product" data-id="${product[index].getAttribute('data-id')}">
        <img class="cart__product-image" src="${image[index].getAttribute('src')}">
        <div class="cart__product-count">${value[index].textContent}</div>
      </div>`);
    }
  }
})