

let resposta = document.getElementById(`resposta`)

function principal(){

    let quantidadepsi = Number(document.getElementById(`quantidadepsi`).value)
    let kgf = 703.07

    let valorkgf = ( quantidadepsi * kgf )

    console.log (`O valor da pressao em kgf/m² é de: ${valorkgf.toFixed(2)}kgf/m²`)

    resposta.innerHTML = ``
    resposta.innerHTML +=`O valor da pressão em kgf/m² é de: ${valorkgf.toFixed(2)}kgf/m²`

}
