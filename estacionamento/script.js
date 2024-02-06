// Função para calcular a diferença de data e hora
function calcularDiferenca() {
    // Obtém a data e hora de início digitada pelo usuário
    var dataHoraInicio = new Date(document.getElementById("dataHoraInicio").value);
    
    // Obtém a data e hora de fim digitada pelo usuário
    var dataHoraFim = new Date(document.getElementById("dataHoraFim").value);

    // Calcula a diferença em milissegundos
    var diferencaMilissegundos = dataHoraFim - dataHoraInicio;
    
    // Converte a diferença para segundos
    var diferencaSegundos = Math.abs(Math.floor(diferencaMilissegundos / 1000));
    
    // Calcula os dias, horas, minutos e segundos
    var dias = Math.floor(diferencaSegundos / (3600 * 24));
    var horas = Math.floor((diferencaSegundos % (3600 * 24)) / 3600);
    var minutos = Math.floor((diferencaSegundos % 3600) / 60);
    var segundos = diferencaSegundos % 60;
    
    // Exibe o resultado
    document.getElementById("resultado").innerHTML = "Diferença: " + dias + " dias, " + horas + " horas, " + minutos + " minutos, " + segundos + " segundos.";

}
    // Função para preencher o valor do input datetime-local como a data e hora atual
function preencherValorDataHoraAtual() {
    var agora = new Date();
    var ano = agora.getFullYear();
    var mes = agora.getMonth() + 1;
    var dia = agora.getDate();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();
    if (mes < 10) {
        mes = '0' + mes;
    }
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (hora < 10) {
        hora = '0' + hora;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    var valorDataHoraAtual = ano + '-' + mes + '-' + dia + 'T' + hora + ':' + minutos;
    document.getElementById("dataHoraFim").value = valorDataHoraAtual;
}

// Chama a função para definir o valor do input datetime-local como a data e hora atual
preencherValorDataHoraAtual();
