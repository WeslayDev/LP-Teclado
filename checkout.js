const form = document.getElementById('checkoutForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Compra finalizada com sucesso! Em breve entraremos em contato.');
    form.reset();
});

const cartaoInput = document.getElementById('cartao');
cartaoInput.addEventListener('input', () => {
    let valor = cartaoInput.value.replace(/\D/g, '');
    valor = valor.match(/.{1,4}/g);
    if (valor) {
        cartaoInput.value = valor.join('-');
    }
});

const validadeInput = document.getElementById('validade');
validadeInput.addEventListener('input', () => {
    let valor = validadeInput.value.replace(/\D/g, '');
    if (valor.length > 2) {
        valor = valor.slice(0,2) + '/' + valor.slice(2,4);
    }
    validadeInput.value = valor;
});
