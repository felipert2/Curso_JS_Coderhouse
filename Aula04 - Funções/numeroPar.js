// function parOuImpar(){
//     const numero = parseInt(prompt('Informe um numero: '))

//     if (numero % 2 === 0){
//         console.log('O numero ' + numero + ' é Par')
//     }else {
//         console.log('O numero ' + numero +  ' é Impar ')
//     }
// }

// parOuImpar()
// parOuImpar()
// parOuImpar()

// function resultado(num1, num2){
//     return num1 - num2 
// }
//  resultado(8,9)



 




const multilicacao = (num1, num2) => { return num1 * num2}
const soma = (num1, num2) => { return num1 + num2}
const divisao = (num1, num2) => { return num1 / num2}
const subtracao = (num1, num2) => { return num1 - num2}


const calculadora = (num1, num2 , operador)=>{

    if (operador ==='*'){
        return multilicacao(num1, num2)
    }else if (operador === '*'){
        return soma (num1, num2)

    } else if (operador === '/'){
        return divisao (num1, num2)

    } else if (operador === '-'){
        return subtracao (num1, num2)

    }
}

console.log(calculadora(2, 4, '*'))
console.log(calculadora(5,3, '-'))