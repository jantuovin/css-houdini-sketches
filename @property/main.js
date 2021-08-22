const blackSquare = document.querySelector('.square--black');

document.addEventListener('mousemove', (e) => {
  blackSquare.style.setProperty('--black-x', `${e.clientX}px`);
  blackSquare.style.setProperty('--black-y', `${e.clientY}px`);
});
