

let resposta = document.getElementById(`resposta`)

function principal(){

    let fahrenheit = Number(document.getElementById(`fahrenheit`).value)

    let valorcelsius = ( fahrenheit - 32) * 5 / 9

    console.log (`O valor do fahrenheit é de: ${valorcelsius.toFixed(2)}C°`)

    resposta.innerHTML = ``
    resposta.innerHTML += `O valor da temperatura em fahrenheit é de: ${valorcelsius.toFixed(2)}C°`

}

