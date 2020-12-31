let n = 5, asteriscos = '';

console.log ('n = ' + n);

if (n > 1) {
    for (linha = 1; linha <= n; linha += 1) {
        for (espacos = 1; espacos <= (n - linha); espacos += 1) {
            asteriscos += ' ';
        }
        for (iasteriscos = espacos; iasteriscos <= n; iasteriscos += 1) {
            asteriscos += '*';
        }
        console.log(asteriscos);
        asteriscos = '';
    }
}
else {
    console.log ('Digite um valor maior que 1');
}
