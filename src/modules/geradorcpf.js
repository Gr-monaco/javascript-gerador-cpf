class GeradorCPF {
    
    gera(){
        let cpf = new Array(9).fill().map(function() {
            return  Math.floor(Math.random() * 10);
        }); 

        //O cpf é gerado invertido para facilitar no uso das funções map
        let soma = cpf.map(f => parseInt(f)).reduce((prev, current, index, array) => {
            return prev += current * (index + 2);
        }, 0);
        let digito = (soma * 10 % 11 > 9) ? 0 : soma * 10 % 11;
        cpf.unshift(digito);

        //Gerando segundo digito
        soma = cpf.map(f => parseInt(f)).reduce((prev, current, index, array) => {
            return prev += current * (index + 2);
        }, 0);
        digito = (soma * 10 % 11 > 9) ? 0 : soma * 10 % 11;
        cpf.unshift(digito);

        cpf = cpf.reverse().join('');
        let cpfFinal = cpf.slice(0,3) + '.' + cpf.slice(3,6) + '.' + cpf.slice(6,9) + '-' + cpf.slice(9,11);

        return cpfFinal;
    }
}

export {GeradorCPF}