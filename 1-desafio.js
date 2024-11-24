/**
  Verificar Palíndromos
  Escreva uma função em JavaScript que receba uma string e determine se ela é um palíndromo 
  Palindromo: (uma palavra, frase ou número que permanece o mesmo quando lido de trás para frente).
  
  Requisitos:
    - Ignorar espaços, pontuações e diferenças entre maiúsculas e minúsculas.
    - Testar com entradas como:
    - "A man a plan a canal Panama"
    - "racecar"
    - "hello"

  Dica: Use métodos como .toLowerCase(), .replace() e .split().
  Exemplo de saída:
    isPalindrome("A man a plan a canal Panama"); 
    isPalindrome("hello"); 
*/

function isPalindrome(phrase) {
  phrase = phrase.replace(/\s/gi, "").toLowerCase();
  let newPhraseReverse = phrase.split("").reverse().join("")
  return phrase === newPhraseReverse
}


console.log(isPalindrome("A man a plan a canal Panama"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("Anotaram a data da maratona"))

