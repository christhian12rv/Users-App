const con = require('../configs/db');

async function createTable() {
    const [rows] = await con.query(`CREATE TABLE IF NOT EXISTS users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(300) NOT NULL
    )`
    );
    return rows;
}

module.exports = createTable();