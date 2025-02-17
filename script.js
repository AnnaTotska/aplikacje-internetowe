function toggleNavbar() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
}

let currentSlide = 0;

function moveCarousel(direction) {
  const slides = document.querySelectorAll(".carousel-item");
  slides[currentSlide].classList.remove("active");

  if (direction === "next") {
    currentSlide = (currentSlide + 1) % slides.length;
  } else {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }

  slides[currentSlide].classList.add("active");
}

let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.innerHTML = cart
      .map((product) => `<p>${product.item} - $${product.price}</p>`)
      .join("");
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Proceeding to checkout...");
    cart = [];
    updateCart();
  }
}

function validateContactForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }
  return true;
}
