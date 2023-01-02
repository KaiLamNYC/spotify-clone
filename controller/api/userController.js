
//importing the model
const User = require('../../models/userModel')

//function to return all of the users which is the main piece of data
async function getAllUsers(req, res){
    try {

        let result = await User.find({})

        res.json({
            message: 'success',
            payload: result
        })

    } catch (err) {
        console.log(`getAllUsers error: ${err}`);
        res.json({
            message: 'error',
            payload: err
        })
    }
}

//function to get one user
async function getOneUser(req, res){
    try{
        //.name refers to the param set in router
        let result = await User.find({ UserName: req.params.name })
        res.json({
            message: 'success finding user',
            payload: result
        })

    } catch (err) {
        console.log(`getOneUser error: ${err}`);
        res.json({
            message: 'error',
            payload: err
        })

    }
}

module.exports = {
    getAllUsers,
    getOneUser
}