// Um sistema de controle de temperatura está sendo monitorado pelo arduíno.
// A escala do sensor de temperatura vai de 0°C até 100°C
// A escala o Arduino vai de 0V até 5V
// Qual o valor que o programa deve mostrar se o sensor medir 37°C?

let resposta = document.getElementById(`resposta`)

function principal(){
    
    // let tempMaxima = 100, tensaoArduino = 5, tempSensor = 37
    let tempMaxima = Number(document.getElementById(`tempMaxima`).value)
    let tensaoArduino = Number(document.getElementById(`tensaoArduino`).value)
    let tempSensor = Number(document.getElementById(`tempSensor`).value)

    let resArduino =  ( tensaoArduino * tempSensor ) / tempMaxima

    console.log(`O valor da tensão no Arduíno é: ${resArduino.toFixed(2)}V`)
    console.log(`para uma temperatura de: ${tempSensor} °C`)

    resposta.innerHTML = ``
    resposta.innerHTML += `O valor da tensão do Arduino é: ${resArduino.toFixed(2)}V <br>`
    resposta.innerHTML += `para uma temperatura de: ${tempSensor}°C <br>`
    

}

