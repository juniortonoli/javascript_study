// Objeto para manter o controle dos produtos no carrinho
var cart = {};
var prices = {
    "Produto 1": 10, // Preço do Produto 1
    "Produto 2": 15, // Preço do Produto 2
    "Produto 3": 8,  // Preço do Produto 3
    "Produto 4": 12, // Preço do Produto 4
    "Produto 5": 18, // Preço do Produto 5
    "Produto 6": 20  // Preço do Produto 6
};
var totalValue = 0;

function addToCart(productName) {
    // Verifica se o produto já está no carrinho
    if (cart[productName]) {
        // Incrementa a quantidade do produto se já estiver no carrinho
        cart[productName]++;
    } else {
        // Adiciona o produto ao carrinho se ainda não estiver presente
        cart[productName] = 1;
    }

    // Atualiza o conteúdo do pop-up do carrinho
    updateCartPopup();
}

function updateCartPopup() {
    var cartPopup = document.getElementById("cartPopup");
    var totalPricePara = document.createElement("p");
    var individualPricesPara = document.createElement("p");

    cartPopup.innerHTML = ""; // Limpa o conteúdo do pop-up
    totalValue = 0;

    // Loop através dos produtos no carrinho
    for (var productName in cart) {
        if (cart.hasOwnProperty(productName)) {
            var quantity = cart[productName];
            var message;

            // Calcula o preço individual do produto e o total
            var productTotal = prices[productName] * quantity;
            totalValue += productTotal;

            // Define a mensagem com base na quantidade de cada produto no carrinho
            if (quantity === 1) {
                message = "Produto adicionado ao carrinho: " + productName;
            } else {
                message = quantity + "x " + productName + " adicionados ao carrinho";
            }

            // Cria um elemento de parágrafo para exibir a mensagem
            var para = document.createElement("p");
            para.textContent = message;

            // Adiciona o parágrafo ao pop-up do carrinho
            cartPopup.appendChild(para);
        }
    }

    // Soma do valor total dos produtos
    totalPricePara.textContent = "Total: R$ " + totalValue.toFixed(2);
    cartPopup.appendChild(totalPricePara);

    // Soma individual do valor da quantidade de cada produto
    individualPricesPara.textContent = "Soma individual dos produtos:";
    cartPopup.appendChild(individualPricesPara);

    for (var productName in cart) {
        if (cart.hasOwnProperty(productName)) {
            var quantity = cart[productName];
            var productTotal = prices[productName] * quantity;

            var individualPricePara = document.createElement("p");
            individualPricePara.textContent = productName + ": R$ " + productTotal.toFixed(2);
            cartPopup.appendChild(individualPricePara);
        }
    }

    // Mostra o pop-up do carrinho
    cartPopup.style.display = "block";

    // Configura um temporizador para ocultar o pop-up após alguns segundos
    setTimeout(function() {
        cartPopup.style.display = "none";
    }, 6000); // Dobrado para 6 segundos
}
