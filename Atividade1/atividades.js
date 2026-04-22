//1.1 -

function inverterString(texto) {

    const separacao = texto.split("")
    const inversao = separacao.reverse()
    const stringInvertida = inversao.join("")

    console.log(stringInvertida)

}

//1.2 - 

function contarVogais(palavra) {

    let quantidadeVogais = 0
    let palavraLower = palavra.toLowerCase()

    for (let i = 0; i < palavraLower.length; i++) {
        if (palavraLower[i] == "a" || palavraLower[i] == "e" || palavraLower[i] == "i" || palavraLower[i] == "o" || palavraLower[i] == "u") {
            quantidadeVogais++
        }
    }

    console.log("Quantidade de vogais: " + quantidadeVogais)

}

//1.3 - 

function ehPalindromo(texto){
   
    let palindromo = false
    let array = texto.split("")
    let inverso = array.reverse()
    let textoInvertido = inverso.join("")

    if(texto == textoInvertido){
        palindromo =  true
    }

    console.log(palindromo)
}

function contatenarPalavras(frase){
    
    let array = frase.split(" ")
    
    for(let i = 0; i < array.length;i++){
        palavra = array[i]
        let p1 = palavra[0].toUpperCase()
        let resto = palavra.slice(1)
        let resultado = p1 + resto
        console.log(resultado)
    }

    console.log(array)
}