const products = [
  { id: 1, name: "T-shirt" },
  { id: 2, name: "Shoes" },
  { id: 3, name: "Watch" }
];

let cart = [];

function renderProducts() {
  const list = document.getElementById('product-list');
  const search = document.getElementById('search').value.toLowerCase();
  list.innerHTML = '';
  products
    .filter(p => p.name.toLowerCase().includes(search))
    .forEach(p => {
      const item = document.createElement('div');
      item.innerHTML = p.name + " <button onclick='addToCart(" + p.id + ")'>Add to cart</button>";
      list.appendChild(item);
    });
}

function addToCart(id) {
  cart.push(id);
  document.getElementById('cart-count').textContent = cart.length;
}

document.getElementById('search').addEventListener('input', renderProducts);
renderProducts();