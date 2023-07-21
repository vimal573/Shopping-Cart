const cardContainerEl = document.querySelector('.card-container');

const renderProducts = data => {
  return `
          <div class="card">
          <div class="card-img">
            <img src="${data.image}" alt="${data.title}" />
          </div>

          <div class="card-details">
            <div class="card-heading">
              <h1>${data.title}</h1>
            </div>

            <div class="card-price">
              <p>Price: ${data.price}</p>
            </div>

            <div class="card-btn">
              <a href="#">Add To Card</a>
            </div>
          </div>
          </div>
          `;
};

const getProductsData = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) throw new Error('Problem getting products');
    console.log(res);

    const data = await res.json();

    const html = data.map(el => renderProducts(el)).join('');

    cardContainerEl.innerHTML = `${html}`;
  } catch (err) {
    console.log(err);
  }
};

getProductsData();
