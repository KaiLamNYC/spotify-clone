
//giving access to the user collection in our db
const User = require('../../models/userModel')

//function to render all users
async function renderAllUsers(req, res) {
    try {
        let result = await User.find({})

        res.render('allUsers', { users: result})
    } catch (err) {
        console.log(`renderAllUsers error: ${err}`);
    }
}

//function to render a single user
async function renderOneUser(req, res) {
    try {
        let result = await User.find({ UserName: req.params.name })
        console.log(result);

        res.render('oneUser', { user: result[0]})
    } catch (err) {
        console.log(`renderOneUser error: ${err}`);

    }
}


module.exports = {
    renderAllUsers,
    renderOneUser
}
