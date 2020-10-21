import { Route } from "./route.js";
import { Usuario } from "./pages/usuario.js";
import { Post } from "./pages/post.js";

export class Controller
{
    constructor()
    {
        console.log("controller.js");
        this.route = new Route().get();
    }

    getPage = () =>
    {
        switch (this.route)
        {
            case "":
            case "index":
            case "user":
                new Usuario().criar();
                break;
                case "post":
                new Post().criar();
                break;
            case "listar-produtos":
                new Produto().listar();
                break;

        }
    }
}