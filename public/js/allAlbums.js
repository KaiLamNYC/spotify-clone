
let likeButtons = document.querySelectorAll('.favorite-button')
// console.log(albums);

likeButtons.forEach((button) => {
    button.addEventListener('click', addToLikes)
})

let removeLikeButton = document.querySelectorAll('.minus-button')

removeLikeButton.forEach((button) => {
    button.addEventListener('click', removeFromLikes)
})

//in reality take from front end set some html element to the users id
const USER = '63b284734181d706bd6a4007'
const addFavoriteAPI = 'http://localhost:3000/api/users/add-favorite-album'
const deleteFavoriteAPI = 'http://localhost:3000/api/users/delete-favorite-album'

//add a function in the ejs file to check if the album is in the users likes if it is then change the css property in the ejs file to permanently make the heart red if they already liked it then rework the class stuff to add and remove as well
async function addToLikes(event){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "userId": `${USER}`,
            "albumId": `${this.id}`,
            
        })
    }
    const response = await fetch(addFavoriteAPI, requestOptions)
    const data = await response.json()
    console.log(data);
    this.classList.add('liked')
}

async function removeFromLikes(event){
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "userId": `${USER}`,
            "albumId": `${this.id}`,
            
        })
    }
    const response = await fetch(deleteFavoriteAPI, requestOptions)
    const data = await response.json()
    console.log(data);
    this.classList.remove('liked')
}