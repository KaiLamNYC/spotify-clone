
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
app.set('view, engine', 'ejs')
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