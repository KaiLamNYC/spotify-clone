
//importing the model
const User = require('../../models/userModel')

//function to return all of the users which is the main piece of data
async function getAllUsers(req, res){
    try {

        let result = await User.findOne({})

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

module.exports = {
    getAllUsers
}