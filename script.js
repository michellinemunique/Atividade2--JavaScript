// Solicite que o usuário insira três notas
const nota1 = parseFloat(prompt("Insira a primeira nota (entre 0 e 10):"));
const nota2 = parseFloat(prompt("Insira a segunda nota (entre 0 e 10):"));
const nota3 = parseFloat(prompt("Insira a terceira nota (entre 0 e 10):"));

// Verifique se as notas estão dentro do intervalo (entre 0 e 10)
if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
  // Calculando a média
  const somaNotas = nota1 + nota2 + nota3;
  const media = somaNotas / 3;

  // Exibindo o resultado no console
  console.log("Média das notas: " + media);
} else {
  console.log("Por favor, insira as notas(entre 0 e 10).");
}
