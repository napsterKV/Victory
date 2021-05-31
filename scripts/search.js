const container = document.querySelector('.type-list');
const typeElement = document.querySelectorAll('.type');

container.addEventListener('click', (e) => {
  const btn = e.target.closest('.type')
  if (btn !== null) {
    for (const pseudoTypeElement of typeElement) {
      pseudoTypeElement.classList.remove('type__active')
    }
    btn.classList.add('type__active')
  }
});