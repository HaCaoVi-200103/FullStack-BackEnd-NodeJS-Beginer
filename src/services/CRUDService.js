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

const getUser = async (id) => {
    const [result, field] = await connection.query('SELECT * from Users u where id=? ', [id])
    return result;
}

const editUser = async (id, email, name, city) => {
    const [result, field] = connection.query(`
            UPDATE Users
            SET email=?, name=?, city=?
            WHERE id = ?;
        `, [email, name, city, id])
    return result;
}

module.exports = {
    getAllUser, addUser, editUser, getUser
}