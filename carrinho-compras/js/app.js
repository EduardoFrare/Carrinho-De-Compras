let cart = document.getElementById('lista-produtos');
let cartValue = [];
let total = document.getElementById('valor-total');
limpar()

function adicionar() {
    let product = document.getElementById('produto').value;
    let productQuantity = document.getElementById('quantidade').value;
    let productName = product.split('-')[0];
    let productValue = product.split('R$')[1];

    if (productQuantity <= 0 ){
        alert('Quantidade Inválida');
        return
    }

    let quantityValue = productValue * productQuantity;

    cartValue.push(quantityValue);
    let sum = 0;
    for (let i = 0; i < cartValue.length; i++ ) {
        sum += cartValue[i];
    }

    cart.innerHTML = cart.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${parseInt(productQuantity)}x</span> ${productName} <span class="texto-azul">R$${quantityValue}</span>
  </section>`;

    total.innerHTML = `<span class="texto-azul" id="valor-total">R$${sum}</span>`;
    document.getElementById('quantidade').value = 0;
    console.log(cartValue);
    console.log(sum);
}


function limpar() {
    cart.innerHTML = '';
    total.innerHTML = '<span class="texto-azul" id="valor-total">R$0</span>';
}