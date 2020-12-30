let valor1 = 25, valor2 = 18, valor3 = 39;

if (valor1 > valor2) {
    if (valor1 > valor3) {
        console.log ('O maior valor é ' + valor1);
    }
    else if (valor2 > valor3) {
        console.log ('O maior valor é ' + valor2);
    }
    else {
        console.log ('O maior valor é ' + valor3);
    }
}
else if (valor2 > valor3) {
    console.log ('O maior valor é ' + valor2);
}
else {
    console.log ('O maior valor é ' + valor3);
}
