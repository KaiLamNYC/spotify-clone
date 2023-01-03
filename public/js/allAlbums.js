
let likeButtons = document.querySelectorAll('.favorite-button')
// console.log(albums);

likeButtons.forEach((button) => {
    button.addEventListener('click', addAlbumToLikes)
})

let removeLikeButton = document.querySelectorAll('.minus-button')

removeLikeButton.forEach((button) => {
    button.addEventListener('click', deleteAlbumFromLikes)
})

const USER = '63b284734181d706bd6a4007'
const addFavoriteAPI = 'http://localhost:3000/api/users/add-favorite-album'
const deleteFavoriteAPI = 'http://localhost:3000/api/users/delete-favorite-album'


async function addAlbumToLikes(event){
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

async function deleteAlbumFromLikes(event){
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