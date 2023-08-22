//NEED TO PASS IN THE WHICHEVER USER IS "LOGGED IN" TO ALL THE EJS FUNCTIONS IN ORDER TO RENDER A "USER" VIEW/EXPERIENCE
//IN ORDER TO ACT AS THE USER AND PERFORM FUNCTIONS AS THE "USER"

//importing the modules
const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");

//method override for crud functions later
const methodOverride = require("method-override");

//grabbing mongodb function from databse folder
const connectToMongoDB = require("./database/mongodb");

//middleware stuff

//setting path to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//serving up the static files
app.use(express.static(path.join(__dirname, "public")));

//logging all the requests with morgan in the terminal
app.use(logger("dev"));

//read incoming requests properly parsing json body etc
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//override stuff
app.use(methodOverride("_method"));

//setting up the routers to api and views

const viewsRouter = require("./routes/viewRouters/viewRouter");
app.use("/", viewsRouter);

//album router
const albumRouter = require("./routes/api/albumRouter");
app.use("/api/albums", albumRouter);

//user router
const userRouter = require("./routes/api/userRouter");
app.use("/api/users", userRouter);

//artist router
const artistRouter = require("./routes/api/artistRouter");
app.use("/api/artists", artistRouter);

//playlist router
const playlistRouter = require("./routes/api/playlistRouter");
app.use("/api/playlists", playlistRouter);

//songs router
const songRouter = require("./routes/api/songRouter");
app.use("/api/songs", songRouter);

//port stuff at the end
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`server is listening on ${PORT}`);
	//calling the connect to mongo function
	connectToMongoDB();
});
