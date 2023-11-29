function sortBy(option) {
  const productsSection = document.querySelector(".class");
  const productItems = document.querySelectorAll(".box");

  const sortedItems = Array.from(productItems);

  if (option === "availability") {
    sortedItems.sort((a, b) => {
      const availabilityA = a.querySelector(".availability").textContent;
      const availabilityB = b.querySelector(".availability").textContent;

      // Assuming availability is in the format 'Available' or 'Not Available'
      return availabilityA.localeCompare(availabilityB);
    });
  } else if (option === "price") {
    sortedItems.sort((a, b) => {
      const priceA = parseFloat(a.querySelector(".price").textContent.slice(1));
      const priceB = parseFloat(b.querySelector(".price").textContent.slice(1));

      return priceA - priceB;
    });
  }

  // Clear and re-append sorted items to the container
  productsSection.innerHTML = "";
  sortedItems.forEach((item) => {
    productsSection.appendChild(item);
  });
}

// Listen for changes in the select dropdown and trigger sorting
document.getElementById("sortSelect").addEventListener("change", function () {
  const selectedOption = this.value;
  if (selectedOption !== "default") {
    sortBy(selectedOption);
  }
});
