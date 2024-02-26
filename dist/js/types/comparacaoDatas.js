export function comparaDatas(elemento) {
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth() + 1;
    const anoAtual = dataAtual.getFullYear();
    const mesData = elemento.data.getMonth() + 1;
    const anoData = elemento.data.getFullYear();
    if (anoData < anoAtual || (anoData === anoAtual && mesData < mesAtual)) {
        return 'saldoAnterior';
    }
    else if (anoData > anoAtual || (anoData === anoAtual && mesData > mesAtual)) {
        return 'SaldoPrevisto';
    }
    else {
        return 'SaldoAtual';
    }
}
