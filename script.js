const products = [
  { name: 'Caneca Aurora', price: 'R$ 59,90', icon: '☕' },
  { name: 'Vaso Horizonte', price: 'R$ 89,90', icon: '🏺' },
  { name: 'Vela Sereno', price: 'R$ 39,90', icon: '🕯️' },
  { name: 'Caderno Campo', price: 'R$ 47,90', icon: '📔' },
];

const grid = document.querySelector('#product-grid');
const count = document.querySelector('[data-cart-count]');
const toast = document.querySelector('.toast');
let itemsInCart = 0;

grid.innerHTML = products.map((product) => `
  <article class="product-card">
    <div class="product-image" aria-hidden="true"><span>${product.icon}</span></div>
    <div class="product-detail"><h3>${product.name}</h3><p>${product.price}</p><button class="add" aria-label="Adicionar ${product.name} à sacola">+</button></div>
  </article>`).join('');

document.querySelectorAll('.add').forEach((button) => button.addEventListener('click', () => {
  itemsInCart += 1;
  count.textContent = itemsInCart;
  toast.textContent = 'Produto adicionado à sua sacola!';
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
}));

document.querySelector('.menu-button').addEventListener('click', (event) => {
  const menu = document.querySelector('.navigation');
  menu.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', menu.classList.contains('open'));
});

document.querySelector('#year').textContent = new Date().getFullYear();
