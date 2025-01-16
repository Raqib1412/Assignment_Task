// Collapsible Left Menu
const menuToggle = document.getElementById('menuToggle');
const leftMenu = document.getElementById('leftMenu');

menuToggle.addEventListener('click', () => {
    leftMenu.classList.toggle('hidden');
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
});