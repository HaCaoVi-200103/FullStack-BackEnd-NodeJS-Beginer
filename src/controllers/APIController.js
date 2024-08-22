const { getAllUser, addUser } = require('../services/CRUDService');

const getAllUsers = async (req, res) => {
    const result = await getAllUser();
    return res.status(200).json(
        {
            message: 'successfully',
            data: result
        }
    )
}

const CreateUser = async (req, res) => {
    const { email, name, city } = req.body;
    if (!email || !name || !city) {
        return res.status(200).json(
            {
                message: 'missing',
            }
        )
    } else {
        await addUser(email, name, city);
        return res.status(200).json(
            {
                message: 'Add new Successfull',
            }
        )
    }

}

module.exports = {
    getAllUsers, CreateUser
}