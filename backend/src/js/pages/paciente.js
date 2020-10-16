import { PacienteController } from "../controllers/pacientecontroller";

export class Paciente
{
    criar = () =>
    {
        let index = document.getElementById("index");

        //usar os recurso do DOM JS diretamente
        let nomePacienteLabel = document.createElement("label");
        nomePacienteLabel.textContent = "Paciente: ";
        index.append(nomePacienteLabel);

        let nomePacienteInput = document.createElement("input");
        nomePacienteInput.type = "text";
        index.append(nomePacienteInput);

        let p1 = document.createElement("p");
        index.append(p1);

        let datNascimentoLabel = document.createElement("label");
        datNascimentoLabel.textContent = "Data de Nasciemnto: ";
        index.append(datNascimentoLabel);

        let datNascimentoInput = document.createElement("input");
        datNascimentoInput.type = "text";
        index.append(datNascimentoInput);

        let p2 = document.createElement("p");
        index.append(p2);

        let telPacienteLabel = document.createElement("label");
        telPacienteLabel.textContent = "Telefone: ";
        index.append(telPacienteLabel);

        let telPacienteInput = document.createElement("input");
        telPacienteInput.type = "text";
        index.append(telPacienteInput);

        let p3 = document.createElement("p");
        index.append(p3);

        let RGPacienteLabel = document.createElement("label");
        RGPacienteLabel.textContent = "RG: ";
        index.append(RGPacienteLabel);

        let RGPacienteInput = document.createElement("input");
        RGPacienteInput.type = "text";
        index.append(RGPacienteInput);

        let p4 = document.createElement("p");
        index.append(p4);

        let CPFPacienteLabel = document.createElement("label");
        CPFPacienteLabel.textContent = "CPF: ";
        index.append(CPFPacienteLabel);

        let CPFPacienteInput = document.createElement("input");
        CPFPacienteInput.type = "text";
        index.append(CPFPacienteInput);

        let p5 = document.createElement("p");
        index.append(p5);

        let ruaPacienteLabel = document.createElement("label");
        ruaPacienteLabel.textContent = "Rua: ";
        index.append(ruaPacienteLabel);

        let ruaPacienteInput = document.createElement("input");
        ruaPacienteInput.type = "text";
        index.append(ruaPacienteInput);

        let p6 = document.createElement("p");
        index.append(p6);

        let bairroLabel = document.createElement("label");
        bairroLabel.textContent = "Bairro: ";
        index.append(bairroLabel);

        let bairroInput = document.createElement("input");
        bairroInput.type = "text";
        index.append(bairroInput);

        let p7 = document.createElement("p");
        index.append(p7);

        let numPacienteLabel = document.createElement("label");
        numPacienteLabel.textContent = "Numero: ";
        index.append(numPacienteLabel);

        let numPacienteInput = document.createElement("input");
        numPacienteInput.type = "text";
        index.append(numPacienteInput);

        let p8 = document.createElement("p");
        index.append(p8);

        let botao = document.createElement("button");
        botao.textContent = "Enviar";

        botao.addEventListener("click", ()=>{
            new PacienteController().setClick({
                nomePaciente,
                datNascimento,
                telPaciente,
                RGPaciente,
                CPFPaciente,
                ruaPaciente,
                bairro,
                numPaciente
            });
        });
        
        index.append(botao);
        
    }
}