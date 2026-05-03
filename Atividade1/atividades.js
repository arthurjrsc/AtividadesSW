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

function ehPalindromo(texto) {

    let palindromo = false
    let array = texto.split("")
    let inverso = array.reverse()
    let textoInvertido = inverso.join("")

    if (texto == textoInvertido) {
        palindromo = true
    }

    console.log(palindromo)
}

//1.4 - 

function contatenarPalavras(frase) {

    let array = frase.split(" ")

    for (let i = 0; i < array.length; i++) {
        palavra = array[i]
        let p1 = palavra[0].toUpperCase()
        let resto = palavra.slice(1)
        let resultado = p1 + resto
        console.log(resultado)
    }

    console.log(array)
}

//2.1 - 

class Aluno {

    constructor(nome, idade, curso) {
        this.nome = nome
        this.idade = idade
        this.curso = curso
    }
}

function criarAluno(nome, idade, curso) {
    let a = new Aluno(nome, idade, curso)
    console.log(a)
}

//2.2 - 



function calcularIMC(nome, peso, altura) {

    let imc = peso / (altura * altura)

    let classificacao

    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (imc < 25) {
        classificacao = "Peso normal"
    } else if (imc < 30) {
        classificacao = "Sobrepeso"
    } else {
        classificacao = "Obesidade"
    }

    return {
        nome: nome,
        imc: imc.toFixed(),
        classificacao: classificacao
    }

}

//2.3 - 

function buscarContato(contatos, nome) {
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].nome.toLowerCase() == nome.toLowerCase()) {
            return contatos[i]
        }
    }
    return null
}

//3.1 - 

function diaDaSemana(num) {
    switch (num) {
        case 1:
            return "Domingo"
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"
        default:
            return "Dia inválido"
    }
}

//3.2 - 

function calculadora(num1, num2, sinal) {
    switch (sinal) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            if (num2 == 0) {
                return "Erro: Divisão por 0 não é permitida"
            } else {
                return (num1 / num2).toFixed(2)
            }
    }
}

//3.3 - 

function validarAprovacao(nota){
    return nota >= 60 ? "Aprovado" : "Reprovado"
}

//4.1 - 

const realParaDolar = (real,cotacao) => (real / cotacao).toFixed(2)

//4.2 - 

const gerarMensagem = (nome,idade,cidade) => "Ola meu nome é "+nome+", tenho "+idade+" anos e moro em "+cidade

//5.1 - 

function dobrarValores(numeros){
    let numerosDobrados =  numeros.map(n => n*2)

    return numerosDobrados
}

//5.2 - 

function filtarIdades(pessoas){
    let idadesFiltradas = pessoas.filter(p => p.idade >= 18)

    return idadesFiltradas
}

//5.3 - 

function buscarProdutoPorId(produtos,id){
    let produto = produtos.find(p => p.id == id)
    return produto
}

//6.1 - 

function validarSenha(senha) {
    let erros = [];

    if (senha.length < 8) {
        erros.push("Mínimo 8 caracteres");
    }

    if (!/[A-Z]/.test(senha)) {
        erros.push("Falta letra maiúscula");
    }

    if (!/[a-z]/.test(senha)) {
        erros.push("Falta letra minúscula");
    }

    if (!/[0-9]/.test(senha)) {
        erros.push("Falta número");
    }

    return {
        valida: erros.length === 0,
        erros: erros
    };
}

//6.2 - 

function cifrarCesar(texto, deslocamento) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char >= 'a' && char <= 'z') {
            let codigo = texto.charCodeAt(i) - 97;
            let novoCodigo = (codigo + deslocamento) % 26;
            resultado += String.fromCharCode(novoCodigo + 97);
        } else {
            resultado += char;
        }
    }

    return resultado;
}

//6.3 - 

function ordenarPorNota(alunos) {
    return alunos.sort((a, b) => b.nota - a.nota);
}

//6.4 - 

function removerDuplicadosSet(array) {
    return [...new Set(array)];
}

//6.5 - 

function relatorioTurma(alunos) {

    let soma = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    let media = Number((soma / alunos.length).toFixed(1));

    let melhorAluno = alunos.reduce((melhor, aluno) =>
        aluno.nota > melhor.nota ? aluno : melhor
    );

    let piorAluno = alunos.reduce((pior, aluno) =>
        aluno.nota < pior.nota ? aluno : pior
    );

    let aprovados = alunos.filter(aluno => aluno.nota >= 60).length;

    return {
        media,
        melhorAluno,
        piorAluno,
        aprovados
    };
}
