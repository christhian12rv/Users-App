const { conn } = require('../configs/db');

async function createUsersTable() {
    const con = await conn();
    const [rows] = await con.query(`CREATE TABLE IF NOT EXISTS users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(300) NOT NULL
    )`
    );
    return rows;
}

module.exports = { createUsersTable };