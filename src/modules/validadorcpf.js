class Validador {
    valida() {
        let [pv1, pv2] = userCpf.value.split('-');
        pv1 = pv1.replace('.', '').replace('.', '');
        let array_pv1 = pv1.split('');
        let array_pv2 = pv2;
        let array_rep = array_pv1.concat(array_pv2);
        if (array_rep.every(f => f === array_rep[0])) return false;


        let p1 = userCpf.value.split('-')[0].replace('.', '').replace('.', '');
        let array_p1 = p1.split('');
        array_p1 = array_p1.reverse()
        let soma = array_p1.map(f => parseInt(f)).reduce(f = (prev, current, index, array) => {
            //console.log(array[index], index+2, prev, current*(index+2));
            return prev += current * (index + 2);
        }, 0);

        let middle = (soma % 11 > 9) ? 0 : soma;

        if (!(11 - middle % 11 === parseInt(userCpf.value.split('-')[1][0]))) return false;

        array_p1.unshift(userCpf.value.split('-')[1][0])
        soma = array_p1.map(f => parseInt(f)).reduce(f = (prev, current, index, array) => {
            return prev += current * (index + 2);
        }, 0);

        middle = (soma % 11 === 0) ? 0 : soma;
        if (!(11 - middle % 11 === parseInt(userCpf.value.split('-')[1][1]))) return false;

        return true;
    }
}