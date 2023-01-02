
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

//function to create a new user
// async function createNewUser(req, res) {
//     //change to then catch later like albums
//     try {

//         let newUser = req.body

//         User.create(req.body)

//         res.json({
//             message:'success',
//             payload: req.body
//         })

//     } catch (err) {

//     }
// }

module.exports = {
    getAllUsers
}