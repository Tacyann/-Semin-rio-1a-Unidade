export class PacienteController
{
    constructor ()
    {
        this.dado = {};
    }

    setClick = ( props ) =>
    {

        this.dado = {
            "paciente": props.nomePacienteInput.value,
            "datNascimento": props.datNascimentoInput.value,
            "telPaciente": props.telPacienteInput.value,
            "RGPaciente": props.RGPacienteInput.value,
            "CPFPaciente": props.CPFPacienteInput.value,
            "ruaPaciente": props.ruaPacienteInput.value,
            "bairro": props.bairroInput.value,
            "numPaciente": props.numPacienteInput.value
                
        }

        // != get
        // post
        fetch (
            'https://api.github.com/users',
            {
                method: 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(this.dado)
            }
        ).then( response =>{
            if (response.ok)
            {
                console.log("Paciente cadastrado com sucesso!");
                console.log(response);
            }else
            {
                console.log(response);
            }
        }).catch(error => {
            console.log(error);
        });
    }
}