const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const list = document.querySelector('.list');
const nonactiveLinks = document.querySelectorAll(".list__link_nonactive");
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-modal]');
const overlay = document.getElementById('overlay');
const prevent = ev => ev.preventDefault();

hamburger.addEventListener('click', () => {  
  document.addEventListener('wheel', prevent, {passive: false});
  hamburger.classList.toggle('change');
  menu.classList.toggle('visible');
  overlay.classList.toggle('active');
})

document.body.addEventListener('click', (e) => {  
  if(e.target !== menu && e.target !== list && e.target !== hamburger && e.target.parentElement !== hamburger) {
    document.removeEventListener('wheel', prevent);
    menu.classList.remove('visible');
    hamburger.classList.remove('change');
    overlay.classList.remove('active');    
  }
});

for(item of nonactiveLinks) {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  });
};

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {      
      closeModal(modal);
    });
  });

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
