function verificar(){
var data = new Date
var ano = data.getFullYear()
var fano = document.getElementById('ano')
var res = document.getElementById('dados')
if (fano.value.length == 0 || fano.value > ano){
window.alert('Verifique os dados e tenta novamente')}
else {var sexo = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.style.TextAlign = 'center'
    res.innerHTML = `Idade Calculada ${idade}`}
    if (sexo[0].checked) {res.innerHTML = `Homem com ${idade} anos`}
    if (sexo[1].checked) {res.innerHTML = `Mulherm com ${idade} anos`}

   // img = document.createElement('img')
   // img.setAttribute('id', 'foto')
   // res.appendChild(img)
}
