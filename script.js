function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
async function screenProducts() {
  const items = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const products = data.results;
  products.forEach((product) => {
    const productsOnScreen = {
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    };
    items.appendChild(createProductItemElement(productsOnScreen));
  });
}
async function addToCart(event) {
  await screenProducts();
  const items = document.querySelector('.cart__items');
  const itemId = event.target.parentNode.firstChild.innerHTML;
  const response = await fetchItem(itemId);
  const productsOnCart = {
    sku: response.id,
    name: response.title,
    salePrice: response.price,
  };
  items.appendChild(createCartItemElement(productsOnCart));
}

const clearCart = () => {
  const items = document.querySelectorAll('.cart__item');
  items.forEach((item) => {
    item.remove();
  });
};

// async function totalPrice() {

    // }
window.onload = async () => {
  await screenProducts();
  const btns = document.querySelectorAll('.item__add');
  btns.forEach((button) => {
  button.addEventListener('click', addToCart);
  });
  const btnC = document.querySelector('.empty-cart');
  btnC.addEventListener('click', clearCart);
};
