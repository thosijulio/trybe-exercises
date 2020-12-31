let n = 5, asteriscos = '';

console.log ('n = ' + n);

if (n > 1) {
    for (coluna = 1; coluna <= n; coluna += 1) {
        asteriscos += '*';
        console.log (asteriscos);
    }
}
else {
    console.log ('Digite um valor maior que 1');
}
