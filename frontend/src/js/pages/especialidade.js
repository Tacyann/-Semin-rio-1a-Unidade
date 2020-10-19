import { EspecialidadeController } from "../controllers/especialidadecontroller";

export class Especialidade
{
    criar = () =>
    {
        let index = document.getElementById("index");

        //usar os recurso do DOM JS diretamente
        let descEspecialidadeLabel = document.createElement("label");
        descEspecialidade.textContent = "Especialidade: ";
        index.append(descEspecialidadeLabel);

        let descEspecialidadeInput = document.createElement("input");
        descEspecialidadeInput.type = "text";
        index.append(descEspecialidadeInput);

        let p1 = document.createElement("p");
        index.append(p1);

    
        botao.addEventListener("click", ()=>{
            new EspecialidadeController().setClick({
                descEspecialidade

            });
        });
        
        index.append(botao);
        
    }
}