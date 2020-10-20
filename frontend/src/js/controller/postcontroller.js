export class PostController
{
    constructor ()
    {
        this.dado = {};
    }

    setClick = ( props ) =>
    {

        this.dado = {  
        "user_id": props.user_idInput.value,
        "titleInput": props.titleInput.value,
        "body": props.bodyInput.value,
                
        }

        // != get
        // post
        fetch (
            'https://gorest.co.in/public-api/posts',
            {
                method: 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(this.dado)
            }
        ).then( response =>{
            if (response.ok)
            {
                console.log("Produto cadastrado!");
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