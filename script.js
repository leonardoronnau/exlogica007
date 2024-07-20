let arr = [1, 2, 5, 7, 8];

// Inicialize a variável para armazenar o maior número
let maiorNumero = arr[0]; // Comece com o primeiro elemento

// Percorra o array
for (let i = 1; i < arr.length; i++) {
    // Compare o elemento atual com o maior número encontrado
    if (arr[i] > maiorNumero) {
        maiorNumero = arr[i]; // Atualize o maior número se necessário
    }
}

// Depois do laço, 'maiorNumero' conterá o maior número
console.log(maiorNumero); // Exemplo de saída