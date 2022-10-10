function ligar() {
    let valorNumMin_Minimo = window.document.querySelector("#inumMin-valorMinimo")
    let numMin_Minimo = parseInt(valorNumMin_Minimo.value)
    let valorNumMax_Minimo = window.document.querySelector("#inumMax-valorMinimo")
    let numMax_Minimo =  parseInt(valorNumMax_Minimo.value)

    let valorNumMin_Maximo = window.document.querySelector("#inumMin-valorMaximo")
    let numMin_Maximo = parseInt(valorNumMin_Maximo.value)
    let valorNumMax_Maximo = window.document.querySelector("#inumMax-valorMaximo")
    let numMax_Maximo = parseInt(valorNumMax_Maximo.value)
    //window.alert(numMax_Maximo.value)

    if (numMax_Minimo > numMin_Minimo && numMin_Maximo >= numMax_Minimo && numMax_Maximo > numMin_Maximo)  {
        function minMaxlist() { //função para retornar o valor maximo e minimo de uma lista gerada com o metodo random
            let listaNum = []; // array que conterá os numeros aleatorios
            randNumMax = parseInt(Math.random() * (numMax_Maximo - numMin_Maximo) + numMin_Maximo); // cria um numero aleatorio maximo
            randNumMin = parseInt(Math.random() * (numMax_Minimo - numMin_Minimo) + numMin_Minimo); // cria um numero aleatorio minimo
            for (let i = randNumMin; i <= randNumMax; i++) { // laço criado para adicionar os numero no Array "listaNum" baseado nos numeros gerados acima
                listaNum.push(i)};
            return `o valor minimo da lista é ${Math.min.apply(null, listaNum)} e o valor maximo é ${Math.max.apply(null, listaNum)}`; // retorna o valor minimo e maximo
        }
        let texto = minMaxlist()
        resultado.innerText = texto
        //console.log(minMaxlist())
        
    } else {
        resultado.innerText = "ERRO"
    }
}