export class ProdutoController
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
            'https://gorest.co.in/public-api/products',
            {
                method: 'GET',
                headers: {'Content-type' : 'application/json'},
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