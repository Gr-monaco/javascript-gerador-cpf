import { GeradorCPF } from "./geradorcpf";

class ControllerManager {
    
    constructor(){
        this.divCPF = document.querySelector('.cpfcontainer') 
        this.buttonGeraCPF = document.querySelector('.cpfgera')
        this.geradorCPF = new GeradorCPF();

        //Eu utilizei arrow function para não ter problema de escopo na hora de usar o this
        document.addEventListener("click", e => {
            if (e.target.classList.contains("cpfgera")){
                this.addCPF(this.geradorCPF.gera());
            }
        })
    }

    addCPF(cpf){
        let divisor = document.createElement('div');
        divisor.classList.add("cpfdiv");
        divisor.innerText = cpf;
        this.divCPF.appendChild(divisor);
    }
}

export {ControllerManager};