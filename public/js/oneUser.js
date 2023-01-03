


let deleteButton = document.querySelector('button')

let deleteUserAPI = 'http://localhost:3000/api/users/delete-user/'

deleteButton.addEventListener('click', deleteSelectedUser)

async function deleteSelectedUser(event){
    const requestOptions = {
        method: 'DELETE'

        
    }
    const response = await fetch(deleteUserAPI + this.id, requestOptions)
    // const data = await response.json()
    console.log(response);
}