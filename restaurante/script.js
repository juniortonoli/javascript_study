const inputs = document.querySelectorAll('input[type="number"]');
const totalValue = document.getElementById('total-value');
const pedidoResumo = document.getElementById('pedido-resumo');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        let total = 0;
        let resumo = '';

        inputs.forEach(input => {
            const preco = parseFloat(input.getAttribute('data-preco'));
            const quantidade = parseInt(input.value);
            total += preco * quantidade;
            if (quantidade > 0) {
                const nomeItem = input.previousElementSibling.textContent.split(' - ')[0];
                resumo += `<li>${quantidade}x ${nomeItem}</li>`;
            }
        });

        totalValue.textContent = total.toFixed(2);
        pedidoResumo.innerHTML = resumo;
    });
});
