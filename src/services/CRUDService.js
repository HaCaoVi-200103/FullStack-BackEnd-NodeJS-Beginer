const connection = require('../config/database')

const getAllUser = async () => {
    const [result, field] = await connection.query('SELECT * from Users u ')
    return result;
}

const addUser = async (email, name, city) => {
    const [result, field] = await connection.query(
        `INSERT into Users(email, name, city)
         values(?, ?, ?)`, [email, name, city],
    )
    return result;
}

module.exports = {
    getAllUser, addUser
}