const connection = require('../config/database')

const getAllUser = async () => {
    const [result, field] = await connection.query('SELECT * from Users u ')
    return result;
}

module.exports = {
    getAllUser
}