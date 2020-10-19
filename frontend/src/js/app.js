import { Controller } from "./controller";

export class App
{
    constructor()
    {
        console.log("app.js");
        new Controller().getPage();
    }

} 

new App();