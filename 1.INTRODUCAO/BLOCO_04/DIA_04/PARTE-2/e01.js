function checarPalindromo (palavra) {
    let tamanhoPalavra = palavra.length;

    for (index = 0; index < tamanhoPalavra / 2; palavra += 1) {
        if (palavra[index] !== palavra[tamanhoPalavra - 1 - index]) {
            return false;
        }
        return true;
    }
}

checarPalindromo('arara');