// Dados dos produtos
var products = [
    {
      id: 1,
      title: "Product 1",
      price: 9.99,
      image: "product1.jpg"
    },
    {
      id: 2,
      title: "Product 2",
      price: 19.99,
      image: "product2.jpg"
    },
    {
      id: 3,
      title: "Product 3",
      price: 29.99,
      image: "product3.jpg"
    }
  ];
  
  // Adicionar produtos ao HTML
  var productsContainer = document.getElementById("productsContainer");
  products.forEach(function(product) {
    var productElement = document.createElement("div");
    productElement.classList.add("product");
    
    var imageElement = document.createElement("img");
    imageElement.src = product.image;
    productElement.appendChild(imageElement);
    
    var titleElement = document.createElement("h3");
    titleElement.innerText = product.title;
    productElement.appendChild(titleElement);
    
    var priceElement = document.createElement("p");
    priceElement.innerText = "Price: $" + product.price;
    productElement.appendChild(priceElement);
    
    var addButton = document.createElement("button");
    addButton.innerText = "Add to Cart";
    addButton.addEventListener("click", function() {
      addToCart(product);
    });
    productElement.appendChild(addButton);
    
    productsContainer.appendChild(productElement);
  });
  
  // Carrinho de compras
  var cart = [];
  
  // Função para adicionar itens ao carrinho
  function addToCart(product) {
    cart.push(product);
    updateCartItemCount();
  }
  
  // Função para atualizar a contagem de itens no carrinho
  function updateCartItemCount() {
    var cartItemCount = document.getElementById("cartItemCount");
    cartItemCount.innerText = cart.length;
  }
  