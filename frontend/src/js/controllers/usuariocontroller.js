export class UsuarioController{
    constructor (){
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
        fetch (
            'https://gorest.co.in/public-api/users',
            {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json',
                    'Authorization': 'Bearer 4dd907bb208dc7dab3c57ed59162c857f919e36185d3c1eebb62447806fef3dc'
                },
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