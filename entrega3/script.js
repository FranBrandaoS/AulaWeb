const salario = Number(prompt("Qual o seu salário ?"));
const percento = Number(prompt("Qual o percentual de aumento do seu salário ?"));

const percentoDecimal = parseInt(percento) / 100; // Converter porecento para decimal
const aumento =  percentoDecimal * salario; // Calcular o valor do aumento
const novoSalario = salario + aumento; // Calcular novo salário

document.write("Seu novo salário é: " + novoSalario);