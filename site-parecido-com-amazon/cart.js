// Função para remover um item do carrinho
function removeItem(button) {
    // Encontre o elemento pai (div .cart-item) do botão clicado
    const cartItem = button.parentElement;
    
    // Remova o elemento pai (o item do carrinho)
    cartItem.remove();
  }
  
  // Função para finalizar a compra
  function finalizarCompra() {
    // Aqui você pode adicionar a lógica para finalizar a compra, como enviar um pedido para um servidor
  
    // Exiba uma mensagem de compra finalizada com sucesso
    alert("Compra finalizada com sucesso!");
  }
  