/*
  Desafio: FizzBuzz
    Objetivo: Crie uma função chamada fizzBuzz que recebe um número como entrada e imprime no console números de 1 até esse número, com as seguintes regras:
      Para números divisíveis por 3, imprima "Fizz".
      Para números divisíveis por 5, imprima "Buzz".
      Para números divisíveis por 3 e por 5, imprima "FizzBuzz".
      Para os outros números, imprima o próprio número.
    
    Exemplo de Entrada e Saída:
      fizzBuzz(15);
    Regras:
      A função deve usar um loop para iterar de 1 até o número dado.
      Verifique as condições na ordem correta para evitar conflitos:
      Divisível por 3 e 5.
      Divisível apenas por 3.
      Divisível apenas por 5.
    Imprima o resultado usando console.log.
*/

function fizzBuzz(number) {
  for(let i = 0; i <= number; i++){
    console.log('iniciou')
    if(i % 3 === 0 && i % 5 === 0) {
      console.log(i + ' é divisivel por 3 e 5 então é: FizzBuzz') 
    } else if(i % 3 === 0) {
      console.log(i + ' é divisivel por 3 então é: Fizz') 
    }else if(i % 5 === 0) {
      console.log(i + ' é divisivel por 5 então é: Buzz') 
    } else {
      console.log(i) 
    }
    console.log('finalizou')
    console.log('---------')
  }

}

console.log(fizzBuzz(15))