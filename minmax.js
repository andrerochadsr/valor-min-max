function gerar() {
    let valorNumMin_Minimo = window.document.querySelector("#inumMin-valorMinimo")
    let numMin_Minimo = parseInt(valorNumMin_Minimo.value)
    let valorNumMax_Minimo = window.document.querySelector("#inumMax-valorMinimo")
    let numMax_Minimo =  parseInt(valorNumMax_Minimo.value)
    let valorNumMin_Maximo = window.document.querySelector("#inumMin-valorMaximo")
    let numMin_Maximo = parseInt(valorNumMin_Maximo.value)
    let valorNumMax_Maximo = window.document.querySelector("#inumMax-valorMaximo")
    let numMax_Maximo = parseInt(valorNumMax_Maximo.value)

    if (numMax_Minimo > numMin_Minimo && numMin_Maximo >= numMax_Minimo && numMax_Maximo > numMin_Maximo)  {
        function minMaxlist() { //função para retornar o valor máximo e mínimo de uma lista gerada com o método random.
            let arrayNum = []; // array que conterá os números aleatórios.
            randNumMax = parseInt(Math.random() * (numMax_Maximo - numMin_Maximo) + numMin_Maximo); // cria um numero aleatório máximo.
            randNumMin = parseInt(Math.random() * (numMax_Minimo - numMin_Minimo) + numMin_Minimo); // cria um numero aleatório mínimo.
            for (let i = randNumMin; i <= randNumMax; i++) { // laço criado para adicionar os números no Array "arrayNum" baseado nos números gerados acima.
                arrayNum.push(i)};
            return `o valor mínimo da lista é ${Math.min.apply(null, arrayNum)} e o valor máximo é ${Math.max.apply(null, arrayNum)}. A quantidade de números gerados foi de ${arrayNum.length}`; // retorna o valor mínimo e máximo.
        }
        
        resultado.innerText = minMaxlist() // escreve na div de class "container-resultado" o RETURN da função.
    } else {
        resultado.innerText = "ERRO"
    }
}

function gerarAuto() {
    function minMaxlist() { //função para retornar o valor máximo e mínimo de uma lista gerada com o método random.
        let arrayNum = []; // array que conterá os números aleatórios.
        randNumMax = parseInt(Math.random() * (1000 - 600) + 600); // cria um numero aleatório máximo.
        randNumMin = parseInt(Math.random() * (200 - 5) + 5); // cria um numero aleatório mínimo.
        for (let i = randNumMin; i <= randNumMax; i++) { // laço criado para adicionar os números no Array "arrayNum" baseado nos números gerados acima.
            arrayNum.push(i)};
        return `o valor mínimo da lista é ${Math.min.apply(null, arrayNum)} e o valor máximo é ${Math.max.apply(null, arrayNum)}. A quantidade de números gerados foi de ${arrayNum.length}`; // retorna o valor mínimo e máximo.
    }
    
    resultado.innerText = minMaxlist() // escreve na div de class "container-resultado" o RETURN da função.
}