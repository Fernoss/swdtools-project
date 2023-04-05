// Hamburger
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Add-to-Cart
const addToCartBtns = document.querySelectorAll(".add-to-cart");

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const product = e.target.parentElement;
    const title = product.querySelector("h3").textContent;
    const price = product.querySelector("p").textContent;

    addToCart(title, price);
  });
});

function addToCart(title, price) {
  const cart = document.getElementById("cart");
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <h3>${title}</h3>
    <p>${price}</p>
  `;
  cart.appendChild(cartItem);
}
// Just a comment, addressed the issue for change.
// Search bar
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  products.forEach((product) => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
