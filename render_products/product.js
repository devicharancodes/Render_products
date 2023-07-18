const productDom = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
  try {
    productDom.innerHTML = `<h4 class="loading-product"> Loading....</h4>`;
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDom.innerHTML = `<p class="Error"> Error ...loading </p>`;
  }
};
const displayProduct = (product) => {
  const company = product.fields.company;
  const title = product.fields.name;
  const price = product.fields.price;
  const { url: img } = product.fields.image[0];
  const description = product.fields.description;
  const colors = product.fields.colors;
  const colorList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');
  document.title = title.toUpperCase();
  productDom.innerHTML = `<div class="product-wapper">
        <img class="img" src="${img}" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">
            <span class="product-color"></span>
            ${colorList}
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to kart</button>
        </div>
      </div>`;
};
const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};
start();
