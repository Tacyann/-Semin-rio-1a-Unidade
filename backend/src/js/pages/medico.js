import { MedicoController } from "../controllers/medicocontroller";
import { Especialidade } from "../pages/especialidade";

export class Medico extends Especialidade
{
    criar = () =>
    {
        let index = document.getElementById("index");

        //usar os recurso do DOM JS diretamente
        let nomeMedicoLabel = document.createElement("label");
        produtoLabel.textContent = "Medico: ";
        index.append(nomeMedicoLabel);

        let nomeMedicoInput = document.createElement("input");
        nomeMedicoInput.type = "text";
        index.append(nomeMedicoInput);

        let p1 = document.createElement("p");
        index.append(p1);

        let CRMLabel = document.createElement("label");
        CRMLabel.textContent = "CRM: ";
        index.append(CRMLabel);

        let CRMInput = document.createElement("input");
        CRMInput.type = "text";
        index.append(CRMInput);

        let p2 = document.createElement("p");
        index.append(p2);

        let botao = document.createElement("button");
        botao.textContent = "Enviar";

        botao.addEventListener("click", ()=>{
            new MedicoController().setClick({
                nomeMedico,
                CRM,
                descEspecialidade
            });
        });
        
        index.append(botao);
        
    }
}