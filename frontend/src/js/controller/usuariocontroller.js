export class UsuarioController
{
    constructor ()
    {
        this.dado = {};
    }

    setClick = ( props ) =>
    {

        this.dado = {
            "name": props.nomePacienteInput.value,
            "email": props.datNascimentoInput.value,
            "gender": props.telPacienteInput.value,
            "status": props.telPacienteInput.value
                
        }

        // != get
        // post
        fetch (
            'https://gorest.co.in/public-api/users',
            {
                method: 'POST',
                headers: {"Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Headers": "Content-Type , Access-Control-Allow-Headers, Authorization, X-Requested-With"},
            
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