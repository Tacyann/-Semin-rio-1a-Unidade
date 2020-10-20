import { UsuarioController } from "../controllers/usuariocontroller.js";

export class Usuario
{
    criar = () =>
    {
        let index = document.getElementById("index");

        //usar os recurso do DOM JS diretamente
        let nameLabel = document.createElement("label");
        nameLabel.textContent = "name: ";
        index.append(nameLabel);

        let nameInput = document.createElement("input");
        nameInput.type = "text";
        index.append(nameInput);

        let p1 = document.createElement("p");
        index.append(p1);

        let emailLabel = document.createElement("label");
        emailLabel.textContent = "email: ";
        index.append(emailLabel);

        let emailInput = document.createElement("input");
        emailInput.type = "text";
        index.append(emailInput);

        let p2 = document.createElement("p");
        index.append(p2);

        let genderLabel = document.createElement("label");
        genderLabel.textContent = "gender: ";
        index.append(genderLabel);

        let genderInput = document.createElement("input");
        genderInput.type = "text";
        index.append(genderInput);

        let p3 = document.createElement("p");
        index.append(p3);

        let statusLabel = document.createElement("label");
        statusLabel.textContent = "status: ";
        index.append(statusLabel);

        let statusInput = document.createElement("input");
        statusInput.type = "text";
        index.append(statusInput);

        let p4 = document.createElement("p");
        index.append(p4);


        let botao = document.createElement("button");
        botao.textContent = "Enviar";

        botao.addEventListener("click", ()=>{
            new UsuarioController().setClick({
                nameInput,
                emailInput,
                genderInput,
                statusInput
            });
        });
        
        index.append(botao);
        
    }
}