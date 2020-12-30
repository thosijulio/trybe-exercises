let salarioBruto = 3000, salarioBase, salarioLiquido, descontoINSS, descontoIR;

if (salarioBruto <= 1556.94) {
    descontoINSS = salarioBruto * 0.08;
    salarioBase = salarioBruto - descontoINSS;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoINSS = salarioBruto * 0.09;
    salarioBase = salarioBruto - descontoINSS;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoINSS = salarioBruto * 0.11;
    salarioBase = salarioBruto - descontoINSS;
}
else if (salarioBruto > 5189.82) {
    descontoINSS = 570.88;
    salarioBase = salarioBruto - descontoINSS;
}

if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    descontoIR = (salarioBase * 0.075) - 142.80;
    salarioLiquido = salarioBase - descontoIR;
}
else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    descontoIR = (salarioBase * 0.15) - 354.80;
    salarioLiquido = salarioBase - descontoIR;
}
else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    descontoIR = (salarioBase * 0.225) - 636.13;
    salarioLiquido = salarioBase - descontoIR;
}
else if (salarioBase > 4664.68) {
    descontoIR = (salarioBase * 0.275) - 869.36;
    salarioLiquido = salarioBase - descontoIR;
}