let notaCandidato = 67;

if (notaCandidato > 80) {
    console.log ('Parabéns, você foi aprovado!');
}
else if (notaCandidato < 80 && notaCandidato > 60) {
    console.log ('Você está na nossa lista de espera');
}
else if (notaCandidato < 60) {
    console.log ('Você foi reprovado');
}
else {
    console.log ('Nota inválida');
}