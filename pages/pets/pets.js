const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const list = document.querySelector('.list');
const nonactiveLinks = document.querySelectorAll(".list__link_nonactive");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  menu.classList.toggle('visible');
});

document.body.addEventListener('click', (e) => {  
  if(e.target !== menu && e.target !== list && e.target !== hamburger && e.target.parentElement !== hamburger) {
    menu.classList.remove('visible');
    hamburger.classList.remove('change');
  }
});

for(item of nonactiveLinks) {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  });
}

