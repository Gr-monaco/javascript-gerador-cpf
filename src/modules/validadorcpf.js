class Validador {
    valida(userCpf) {
        /**
         * Algoritmo utilizado: https://dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/
         */

        let [pv1, array_pv2] = userCpf.split('-'); // Separa o CPF
        pv1 = pv1.replaceAll('.', '') // Tira todos os pontos da primeira parte
        let array_pv1 = pv1.split(''); // Divide todos os numeros em uma lista

        //Verifica se o CPF é uma repetição de numeros
        let array_rep = array_pv1.concat(array_pv2);
        if (array_rep.every(f => f === array_rep[0])) return false;

        //O cpf é invertido para poder utilizar a função map mais facilmente
        array_pv1 = array_pv1.reverse()
        let soma = array_pv1.map(f => parseInt(f)).reduce((prev, current, index, array) => {
            return prev += current * (index + 2);
        }, 0);

        let middle = (soma * 10 % 11 > 9) ? 0 : soma * 10 % 11;
        //Verifica se o primeiro digito é valido
        if (!(middle === parseInt(array_pv2[0]))) return false;

        //Adiciona o primeiro digito da segunda parte do CPF na primeira parte
        array_pv1.unshift(array_pv2[0])
        soma = array_pv1.map(f => parseInt(f)).reduce((prev, current, index, array) => {
            return prev += current * (index + 2);
        }, 0);

        middle = (soma * 10 % 11 > 9) ? 0 : soma * 10 % 11;;
        //Verifica se o segundo digito é valido
        if (!(middle === parseInt(array_pv2[1]))) return false;


        return true;
    }
}

export { Validador };