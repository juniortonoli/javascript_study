function contar(){
var inicio = Number(document.getElementById('inicio').value)
var fim = Number(document.getElementById('fim').value)
var passo = Number(document.getElementById('passo').value)
var resultado = document.getElementById('resultado')
resultado.innerHTML = ''
//var i = Number(inicio.value)
//var f = Number(fim.value)
//var p = Number(passo.value)

if (inicio < fim) {
for (var c = inicio; c <= fim; c = c+passo){
    resultado.innerHTML += `${c} `
}}
else { 
for (var c = inicio; c >= fim; c = c-passo){
    resultado.innerHTML += `${c} `}
}}

/* if (fano.value.length == 0 || fano.value > ano){
window.alert('Verifique os dados e tenta novamente')}
else {var sexo = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.style.TextAlign = 'center'
    res.innerHTML = `Idade Calculada ${idade}`}
    if (sexo[0].checked) {res.innerHTML = `Homem com ${idade} anos`}
    if (sexo[1].checked) {res.innerHTML = `Mulherm com ${idade} anos`}

    img = document.createElement('img')
    img.setAttribute('id', 'foto')
    res.appendChild(img) */
