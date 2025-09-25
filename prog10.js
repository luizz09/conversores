

let resposta = document.getElementById(`resposta`)

function principal(){

    let celsius = Number(document.getElementById(`celsius`).value)
    let fahrenheit = 32

    let valorfahrenheit = ( celsius * 9 / 5 ) + 32

    console.log (`O valor do fahrenheit é de: ${valorfahrenheit.toFixed(2)}°F`)

    resposta.innerHTML = ``
    resposta.innerHTML += `O valor da temperatura em fahrenheit é de: ${valorfahrenheit.toFixed(2)}°F`

}

