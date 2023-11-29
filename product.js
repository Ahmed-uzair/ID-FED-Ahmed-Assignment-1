function sortBy(option) {
  const productsSection = document.querySelector(".products");
  const productItems = document.querySelectorAll(".item");

  const sortedItems = Array.from(productItems);

  if (option === "availability") {
    sortedItems.sort((a, b) => {
      const availabilityA = a.querySelector(".availability").textContent;
      const availabilityB = b.querySelector(".availability").textContent;

      // Assuming availability is in the format 'In Stock' or 'Out of Stock'
      return availabilityA.localeCompare(availabilityB);
    });
  } else if (option === "price") {
    sortedItems.sort((a, b) => {
      const priceA = parseFloat(a.querySelector(".price").textContent.slice(1));
      const priceB = parseFloat(b.querySelector(".price").textContent.slice(1));

      return priceA - priceB;
    });
  }
}
let cartItems = [];

// Function to add item to the cart
function addToCart(productName) {
  const selectedProduct = productName;
  const selectedPrice = getProductPrice(selectedProduct);
  const item = {
    name: selectedProduct,
    price: selectedPrice,
  };
  cartItems.push(item);
  displayCart();
}

// Function to remove item from cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  displayCart();
}

// Function to display cart items
function displayCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  cartItems.forEach((item, index) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    cartItemDiv.innerHTML = `
              <p>${item.name} - $${item.price}</p>
              <button onclick="removeFromCart(${index})">Remove</button>
          `;

    cartItemsContainer.appendChild(cartItemDiv);
  });
}

// Function to get price based on product name (Sample implementation)
function getProductPrice(productName) {
  if (productName === "Dragon Head Matte Paddle") {
    return 310.0;
  } else if (productName === "Kraken Paddle") {
    return 290.0;
  } else if (productName === "Crush Paddle") {
    return 260.0;
  } else if (productName === "Black Matte Paddle") {
    return 210.0;
  } else if (productName === "Sticker Adventure Paddle") {
    return 270.0;
  } else if (productName === "Blue Dragon Paddle") {
    return 280.0;
  } else if (productName === "Pink Dragon Paddle") {
    return 280.0;
  } else if (productName === "Dragon Heart Paddle") {
    return 300.0;
  } else if (productName === "Artistic Dragon Paddle") {
    return 270.0;
  } else if (productName === "Dragon Master Paddle") {
    return 310.0;
  } else if (productName === "Black Glossy paddle") {
    return 250.0;
  } else if (productName === "Sakura Koi Fish paddle") {
    return 320.0;
  } else if (productName === "Non-slip cusion pants") {
    return 64.0;
  } else if (productName === "Dragon Guard") {
    return 22.0;
  } else if (productName === "Dragon Boat seatpad") {
    return 25.0;
  } else if (productName === "Unisex Fingerless gloves") {
    return 20.0;
  } else if (productName === "Sillicon grip tape") {
    return 30.0;
  } else if (productName === "Gift card1") {
    return 5.0;
  } else if (productName === "Gift card2") {
    return 10.0;
  } else if (productName === "Gift card3") {
    return 20.0;
  } else if (productName === "Hornet Paddle Blade Cover (Black/Black/Silver)") {
    return 39.0;
  } else if (productName === "Blue Dragon Short Sleeve Shirt") {
    return 12.0;
  } else if (productName === "Pink/Black Dragon Boat Paddle Bag") {
    return 59.0;
  } else if (productName === "Carry-All Extra Large Paddle Bag (Black)") {
    return 69.0;
  } else if (productName === "(Clearance)Black Glossy paddle") {
    return 99.0;
  } else if (productName === "(Clearance)Sticker Adventure Paddle") {
    return 120.0;
  } else if (productName === "(Clearance)Pink Dagon Paddle") {
    return 130.0;
  } else if (productName === "(Clearance)Kraken Paddle") {
    return 150.0;
  } else if (productName === "(Clearance)Dragon Master Paddle") {
    return 200.0;
  } else if (productName === "(Clearance)Dragon Heart Paddle") {
    return 179.0;
  } else if (productName === "(Clearance)Artistic Dragon Paddle") {
    return 179.0;
  }
  // Add prices for other products as needed
  return 0; // If price not found
}

function toggleCart() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display =
    cartPopup.style.display === "block" ? "none" : "block";
}
