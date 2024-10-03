let links = document.querySelectorAll(".has-tooltip");

let boo = document.createElement("div");
boo.classList.add("tooltip");
boo.innerHTML = "";
links.forEach((event) => {
  event.onclick = (e) => {
    if (boo.innerHTML == event.title) {
      boo.classList.toggle("tooltip_active");
    } else {
      boo.innerHTML = event.title;
      boo.style.left = event.offsetLeft + "px";
      event.insertAdjacentElement("afterEnd", boo);
      boo.classList.add("tooltip_active");
    }
    e.preventDefault();
  };
});