// Sample product data
var products = [
    { name: "Product 1", price: 10.99 },
    { name: "Product 2", price: 19.99 },
    { name: "Product 3", price: 7.99 }
  ];
  
  // Function to display products on the page
  function displayProducts() {
    var productList = document.getElementById("product-list");
    
    // Clear existing content
    productList.innerHTML = "";
    
    // Generate HTML for each product
    products.forEach(function(product) {
      var productDiv = document.createElement("div");
      productDiv.className = "product";
      
      var name = document.createElement("h3");
      name.textContent = product.name;
      
      var price = document.createElement("p");
      price.textContent = "$" + product.price.toFixed(2);
      
      var addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.addEventListener("click", function() {
        addToCart(product);
      });
      
      productDiv.appendChild(name);
      productDiv.appendChild(price);
      productDiv.appendChild(addToCartButton);
      
      productList.appendChild(productDiv);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(product) {
    // Implement your cart logic here
    console.log("Added to cart: " + product.name);
  }
  
  // Display products when the page loads
  window.addEventListener("load", function() {
    displayProducts();
  });