// Progressive enhancement: navigation stays available without JavaScript.
document.documentElement.classList.add('js');
document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.hidden = false;
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  toggle.querySelector('span').textContent = open ? '−' : '+';
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
