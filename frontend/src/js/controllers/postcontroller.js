export class PostController{
    constructor ()
    {
        this.dado = {};
    }
    setClick = ( props ) =>
    {
        this.dado = {  
        "user_id": props.user_idInput.value,
        "title": props.titleInput.value,
        "body": props.bodyInput.value,          
        }
        fetch (
            'https://gorest.co.in/public-api/posts',
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