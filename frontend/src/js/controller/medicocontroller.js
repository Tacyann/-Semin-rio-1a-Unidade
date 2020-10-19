export class MedicoController
{
    constructor ()
    {
        this.dado = {};
    }

    setClick = ( props ) =>
    {

        this.dado = {
            "nomeMedico": props.nomePacienteInput.value,
            "CRM": props.datNascimentoInput.value,
            "descEspecialidade": props.telPacienteInput.value,
                
        }

        // != get
        // post
        fetch (
            'https://gorest.co.in/public-api/users',
            {
                method: 'POST',
                headers: {'Content-type' : 'application/json', "Access-Control-Allow-Origin" : "*"},
            
                body: JSON.stringify(this.dado)
            }
        ).then( response =>{
            if (response.ok)
            {
                console.log("Medico cadastrado com sucesso!");
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