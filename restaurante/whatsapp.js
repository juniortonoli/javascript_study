enviarPedidoBtn.addEventListener('click', () => {
    let pedidoTexto = `Pedido:%0A`;
    const itensPedido = pedidoResumo.querySelectorAll('li');
    itensPedido.forEach(item => {
        pedidoTexto += item.textContent.replace(/\s*\(x[0-9]+\)/, '') + '%0A';
    });
    pedidoTexto += `Total: R$ ${totalValue.textContent}`;
    const whatsappLink = `https://wa.me/5511NUMEROWHATS?text=${pedidoTexto}`;
    window.open(whatsappLink, '_blank');
});

//pedir pelo whatsapp - Enviar enter com %0A
