let resposta = document.getElementById('resposta')

function calcular(){
    let temp = Number(document.getElementById('temp').value)
    console.log(temp)

    let celcius = (temp * 1.8) + 32

    console.log(celcius)
    resposta.innerHTML = "É temperatura em celsius é: " + celcius
}