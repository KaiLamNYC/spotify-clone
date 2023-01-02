
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

module.exports = {
    renderAllUsers
}
