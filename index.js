
//importing the modules
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan')

//method override for crud functions later
const methodOverride = require('method-override')

//grabbing mongodb function from databse folder
const connectToMongoDB = require('./database/mongodb')

//middleware stuff

//setting path to ejs
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, 'views'));

//serving up the static files
app.use(express.static(path.join(__dirname, 'public')));

//logging all the requests with morgan in the terminal
app.use(logger('dev'));

//read incoming requests properly parsing json body etc
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//override stuff
app.use(methodOverride('_method'));

//setting up the routers to api and views

const viewsRouter = require('./routes/viewRouters/viewRouter')
app.use('/', viewsRouter)

//album router
const albumRouter = require('./routes/api/albumRouter')
app.use('/api/albums', albumRouter)

//user router
const userRouter = require('./routes/api/userRouter')
app.use('/api/users', userRouter)

//artist router
const artistRouter = require('./routes/api/artistRouter')
app.use('/api/artists', artistRouter)

//playlist router
const playlistRouter = require('./routes/api/playlistRouter')
app.use('/api/playlists', playlistRouter)

//songs router
const songRouter = require('./routes/api/songRouter')
app.use('/api/songs', songRouter)

//port stuff at the end
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
    //calling the connect to mongo function
    connectToMongoDB()
})

//set up all the views for the different collections

//need to set up crud for all the collections
//each collection has its own router and controller etc





// const mongoose = require('mongoose')

// const Player = new mongoose.Schema(
//     {
//         Name: {
//             type: String,
//             required: true,
//             unique: true
//         },
//         Position: {
//             type: String,
//             required: true,
//             unique: false
//         },
//         Number: {
//             type: Number,
//             required: true,
//             unique: true
//         },
//         Team: {
//             type: Schema.Types.ObjectId,
//             ref: "Team"
//         },
//         //dont know if many to many or one to many. since each player only has one team
//         Games: [{
//             type: Schema.Types.ObjectId,
//             ref: "Game"
//         }],
        
//     }
// )

// //depends on how im going to pull the actual data or display it
// //can pull just players by team name or pulll the "game stats" by the player.team key

// // const Team = new mongoose.Schema(
// //     {
// //         Name: {
// //             type: String,
// //             required: true,
// //             unique: true
// //         },
// //         Players: [{
// //             type: Schema.Types.ObjectId,
// //             ref: "Player"
// //         }],
       
// //     }
// // )

// //game belongs to the player instead of the team therefore the stats are all one to one relationship with player
// const Game = new mongoose.Schema(
//     {
//         Date: {
//             type: String,
//             required: true,
//             unique: false
//         },
//         Home: {
//             //one to many or one to one i think
//         },
//         Away: {
//             //one to many
//         },
//         Player: [{
//             type: Schema.Types.ObjectId,
//             ref: "Player"
//         }],
//         Points: {
//             type: Number,
//             required: true,
//             default: 0
//         },
//         Rebounds: {
//             type: Number,
//             required: true,
//             default: 0
//         },
//         Assists: {
//             type: Number,
//             required: true,
//             default: 0
//         },
//         Steals: {
//             type: Number,
//             required: true,
//             default: 0
//         },
//         Blocks: {
//             type: Number,
//             required: true,
//             default: 0
//         }, 
        
//     }
// )

// // const Stats = new mongoose.Schema(
// //     {
// //         Points: {
// //             type: Number,
// //             required: true,
// //             default: 0
// //         },
// //         Rebounds: {
// //             type: Number,
// //             required: true,
// //             default: 0
// //         },
// //         Assists: {
// //             type: Number,
// //             required: true,
// //             default: 0
// //         },
// //         Steals: {
// //             type: Number,
// //             required: true,
// //             default: 0
// //         },
// //         Blocks: {
// //             type: Number,
// //             required: true,
// //             default: 0
// //         },
// //         } 
// // )

//function to like a song/album/follow artist basically put a button at the bottom if thing

//instead of using form override use button connected to the ejs.
//static js file needs to be used for updating and delete
//only need to be able to update and delete the playlist/user technically for the client
//admin is able to update artist, album, song etc
//so just like the other project, the button should redirect the user to the new page after making the fetch fall

//actually i think it still needs to be a form except the button isnt an input type=submit. its a button with a onClick


//user create uses .create and returns all users

//album does the same and same for artist and for songs

//need to make a "home" page view called library with all the users content

//need to make a partials for the ejs site because a lot of repeats.
//start woth the views fir all of them

//have nav bar maybe and then home bar idk
//chstgot to make the css
//doesnt have to be crwzy functionality is what matters
//need to be able to create playlists by adding them from a list or something

//create album and songs is for the backend admin not front end so maybe no need for view for that only json response

//needs a front end for create user like a login page almost

//can add later after learn in class next week

//create user redirects to users home page 

//maybe make a key like isAdmin and give it true to allow the full functionality

//kind of hacky

//can have a checkbox for the boolean values

//when creating playlists, maybe try to query it from somewhere. need to makr sure the song exists. maybe just put a button next to song to add to playlist

//button needs to have a popup maybe to specify which playlist youre adding it to 

//i dont think you need to be able to see who liked whta maybe like for songs.

//only need to see likes for songs, albums, playlist, artist follows on the users end in their library 


//need to make all the redirect urls dynamic. needs to add the name to the end of url like usual

//all artists, albums, dont rlly need a songs cuz too many

//later can add a search bar
//one artist vire showd all of the artists relational data like the albums, maybe playlists havent decided yet

//can also put like artists top songs if u want

//base it off likes or something. using sort method and taking top 5


//need to add image tags to albums and songs

//also needs a heart image on the database for the actual like button or soemthing similar and then just change the backgrijnd color when you like

//can rlly just use a regular button for now

//look up how to use image as Button

//same function as the other music project. needs to add 1 to the like stat and also add it to users profile

//need a sort method for all the albums and the users like before. to view all users by name. maybe a tab for most popular artists

//playlist image is your profile image

//on the create form set the placeholder to the users image beforehand so it shares the same value
//only rlly works on the frontend because of placeholder attribute
//this needs to be applied to songs, which share the same image as album art and to playlists which share the same image as the user profile
