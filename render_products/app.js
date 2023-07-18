const url = 'https://course-api.com/javascript-store-products';

const productsDom = document.querySelector('.products-center');

const fetchProducts = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDom.innerHTML = `<p class="error">There is an ERROR </p>`;
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      return `<a class="singl-product" href="product.html?id=${id}&name=devicharan&age=30">
            <img src="${img}" alt="${title}" class="single-product-img img" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">${price / 100}</span>
            </footer>
          </a>`;
    })
    .join('');
  productsDom.innerHTML = `<div class="products-container">
          ${productList};
        </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};
start();
