let n = 5, linha;

for (indexLinha = 1; indexLinha <= n; indexLinha += 2) {
    let tamanhoIdent = (n - indexLinha) / 2;
    let identEsquerda = ' '.repeat(tamanhoIdent);

    let tamanhoVazio = indexLinha - 2;

    if ((indexLinha == n) || tamanhoVazio < 0) {
        linha = identEsquerda + '*'.repeat(indexLinha);
    }
    else {
        let vazio = ' '.repeat(tamanhoVazio);
        linha = identEsquerda + '*' + vazio + '*';
    }
    console.log(linha);
}

