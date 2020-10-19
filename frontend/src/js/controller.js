import { Route } from "./route.js";
import { Paciente } from "./pages/paciente.js";
import { Especialidade } from "./pages/especialidade.js";
import { Medico } from "./pages/medico.js";

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
            case "home":
                new Especialidade().criar();
                break;

        }
    }
}