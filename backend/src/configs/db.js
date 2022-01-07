
const mysql = require('mysql2/promise');

async function conn() {
    try {
        const con = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'c19141300Ccrv',
            database: 'usersapp'
        });
        console.log("Conectou ao MySQL!");
        return con;
    } catch (error) {
        console.log(`Ocorreu um erro ao conectar ao MySQL: ${error}`);
    }
}

async function createUsersTable() {
    const con = await conn();
    const [rows] = await con.query(`CREATE TABLE IF NOT EXISTS users(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(300) NOT NULL
    )`);
    return rows;
}

module.exports = {
    conn,
    createUsersTable
};