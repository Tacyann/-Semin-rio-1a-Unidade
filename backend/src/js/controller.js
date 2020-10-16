import { Route } from "./router";
import { Paciente } from "./pages/paciente";
import { Especialidade } from "./pages/especialidade";
import { Medico } from "./pages/medico";

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
                new Paciente().criar();
                new Medico().criar();
                break;

        }
    }
}