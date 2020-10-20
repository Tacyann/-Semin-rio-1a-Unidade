import { PostController } from "../controllers/postcontroller.js";

export class Post
{
    criar = () =>
    {
        let index = document.getElementById("index");

        //usar os recurso do DOM JS diretamente
        let user_idLabel = document.createElement("label");
        user_idLabel.textContent = "user_id: ";
        index.append(user_idLabel);

        let user_idInput = document.createElement("input");
        user_idInput.type = "text";
        index.append(user_idInput);

        let p1 = document.createElement("p");
        index.append(p1);

        let titleLabel = document.createElement("label");
        titleLabel.textContent = "Titulo: ";
        index.append(titleLabel);

        let titleInput = document.createElement("input");
        titleInput.type = "text";
        index.append(titleInput);

        let p2 = document.createElement("p");
        index.append(p2);

        let bodyLabel = document.createElement("label");
        bodyLabel.textContent = "Body: ";
        index.append(bodyLabel);

        let bodyInput = document.createElement("input");
        bodyInput.type = "text";
        index.append(bodyInput);

        let p3 = document.createElement("p");
        index.append(p3);

        let botao = document.createElement("button");
        botao.textContent = "Enviar";

        botao.addEventListener("click", ()=>{
            new PostController().setClick({
                user_id,
                titleInput,
                body
            });
        });
        
        index.append(botao);
        
    }
}