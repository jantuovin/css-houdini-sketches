CSS.paintWorklet.addModule('./bgPaintWorklet.js');

(() => {
  const header = document.querySelector('.header');
  const percentageSpan = header.querySelector('span');

  let loadedPercentage = 0;
  const headerUpdateInterval = setInterval(() => {
    loadedPercentage += 1;
    header.style.setProperty('--widthPercentage', loadedPercentage);
    percentageSpan.textContent = loadedPercentage;
    if (loadedPercentage === 100) {
      clearInterval(headerUpdateInterval);
    }
  }, 50);
})();