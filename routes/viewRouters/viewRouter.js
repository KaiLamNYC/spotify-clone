

//importing modules for router

const express = require('express')
const router = express.Router();

//importing the functions from the controller later

//setting up the actual router

//rendering the home page
router.get('/', (req, res) => {
  res.render('index');
});


//exporting the router
module.exports = router;

