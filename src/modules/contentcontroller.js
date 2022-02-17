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
        let para = document.createElement('p');
        para.innerText = cpf;
        divisor.appendChild(para);
        let buttonDel = document.createElement('button');
        buttonDel.innerText = "Deletar";
        para.appendChild(buttonDel)
        divisor.classList.add("cpfdiv");
        this.divCPF.appendChild(divisor);
    }
}

export {ControllerManager};