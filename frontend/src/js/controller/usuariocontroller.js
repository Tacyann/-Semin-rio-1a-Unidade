export class UsuarioController
{
    constructor ()
    {
        this.dado = {};
    }

    setClick = ( props ) =>
    {

        this.dado = {
            "name": props.nameInput.value,
            "email": props.emailInput.value,
            "gender": props.genderInput.value,
            "status": props.statusInput.value
                
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
                console.log("Usuário cadastrado com sucesso!");
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