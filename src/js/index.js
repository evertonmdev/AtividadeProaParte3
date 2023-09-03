const CalculadoraDivisao = async () => {
    let primeiro_numero = parseFloat(prompt("Qual é o dividendo?"))
    const validNumber = () => {
        return new Promise(resolve => {
            const PerguntarNumero = () => {
                let valor = parseFloat(prompt("Qual é o divisor?"))
                if(valor <= 0) {
                    alert("Insira um valor maior que zero")
                    PerguntarNumero()
                } else {
                    resolve(valor)
                }
            }

            PerguntarNumero()
        })   
    }

    let segundo_numero = await validNumber()

    alert(`O resultado deu ${primeiro_numero / segundo_numero}`)
}


const BombaRelogio = async () => {
    // Oh grande mestre do universo porque complicaste a minha vida com esse document.write 🥹🥹.
    window.location = 'src/pages/bomba.html'
}


const ContagemRegressiva = async () => {
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    const timer = document.getElementById("timerRegressiva")
    const button = document.getElementById("buttonRegressiva")

    button.setAttribute("disabled", "disabled")
    for(let i = 10; i >= 1; i--) {
        await Sleep(1000)
        timer.innerText = i
    }

    await Sleep(2000)
    timer.innerText = "03"
    button.removeAttribute("disabled")
}

const MediaAritimedica = () => {
    const numeros = []
    while(true) {
        let valor = parseInt(prompt("Informe um número. Obs: para terminar o processo e calcular a média digite: 1"))
        if(valor === 1) {
            let total = 0
            for(let number of numeros) {
                total += number
            }

            alert(`A média é ${total / numeros.length}`)
            break;
        }

        if(valor >= 15 && valor <= 100) numeros.push(valor)
        else alert("Esté número não será contabilizado")
    }
}


const MediaAritimedicaDois = () => {
    const p_numero = parseInt(prompt("Qual é o primeiro valor?"))
    const s_numero = parseInt(prompt("Qual é o segundo valor?"))
    const numeros_decrescente = []

    const media = (p_numero + s_numero) / 2

    let maiorNumero = p_numero > s_numero ? p_numero : s_numero;
    let menorNumero = p_numero < s_numero ? p_numero : s_numero;

    
    for(let i = menorNumero; i <= maiorNumero; i++) {
        numeros_decrescente.push(i)
    }

    alert(`${numeros_decrescente.join(',')} a média é ${media}`)
}


const MediaDosAlunos = () => {
    const alunos = {
        aprovados: 0,
        reprovados: 0,
    } 

    const CalcularMediaAluno = () => {
        const p_numero = parseFloat(prompt("Qual é a primeira nota?"))
        const s_numero = parseFloat(prompt("Qual é a segunda nota?"))
        const media = (p_numero + s_numero) / 2

        let resposta

        if(media > 9.5) {
            alunos.aprovados++
            alert(`O aluno foi aprovado [ ${media} ]`)
            resposta = prompt("Calcular a média de outro aluno Sim/Não?")
        } else {
            alunos.reprovados++
            alert(`O aluno foi reprovado [ ${media} ]`)
            resposta = prompt("Calcular a média de outro aluno Sim/Não?")
        }

        if(resposta.toLowerCase() == "sim" || resposta.toLowerCase() == "s") CalcularMediaAluno()
        else {
            alert(`${alunos.aprovados} foram aprovados e ${alunos.reprovados} foram reprovados, total: ${alunos.aprovados + alunos.reprovados}`)
        }
    }
    
    CalcularMediaAluno()
}



const MediaDoAlunoDOis = () => {
    const palavras = ["primeira", "segunda", "terceira", "quarta", "quinta", "sexta"]
    let somaNotas = 0

    for(let i = 0; i < palavras.length; i) {
            let valor = parseFloat(prompt(`Qual foi a nota do aluno na ${palavras[i]} avaliação?`))
            if(valor < 0 || valor > 10) alert("Por favor insira um valor válido de 0 a 10")
            else {
                somaNotas += valor
                i++ 
            }
    }
    
    alert(`A média do aluno foi de ${somaNotas / 6}`)
}


const ValorEntreUmEN = () => {
    const N = parseInt(prompt("Qual é o número?"))
    const numeros = []

    for(let i = 1; i <= N; i++) {
        numeros.push(i)
    }

    alert(`Ok, [ ${numeros.join(',')} ]`)
}



const DezMaioresQueCem = () => {
    const numeros = []

    for(let i = 101; i <= 100 + 10; i++) {
        numeros.push(i)
    }

    alert(`[ ${numeros.join(',')} ]`)
}


const Tabuada = () => { 
    const N = parseInt(prompt("Até qual posição você quer a tabuada?"))
    let valores = []
    
    for(let valor = 1; valor <= N; valor++) {
        for(let i = 1; i <= 10; i++) {
            valores.push(`${i} x ${valor} = ${valor * i}`)
        }

        valores.push("================")
    }

    alert(valores.join("\n"))
}


const AtividadeOnze = () => {
    const numerosValidos = []
    const numerosInvalidos = []

    for(let i = 1; i <= 10; i++) {
        let valor = parseInt(prompt(`${i}. Informe um número.`))
        if(valor >= 24 && valor <= 42) numerosValidos.push(valor)
        else numerosInvalidos.push(valor)
    }

    alert(`Números válidos: ${numerosValidos}\n Números invalidos: ${numerosInvalidos}`)
}
