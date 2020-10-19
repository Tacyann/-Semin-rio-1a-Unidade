export class EspecialidadeController
{
    constructor ()
    {
        this.dado = {};
    }

    setClick = ( props ) =>
    {

        this.dado = {
            "descEspecialidade": props.descEspecialidadeInput.value
                
        }

        // != get
        // post
        fetch (
            'https://web-unit.herokuapp.com/clientes',
            {
                method: 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(this.dado)
            }
        ).then( response =>{
            if (response.ok)
            {
                console.log("Especialidade cadastrada!");
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