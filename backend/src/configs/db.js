const mysql = require('mysql2/promise');

async function conn() {
    try {
        const con = await mysql.createConnection({
            host: 'SEU HOST',
            user: 'SEU USUÁRIO',
            password: 'SUA SENHA',
            database: 'SEU BANCO DE DADOS'
        });
        console.log("Conectou ao MySQL!");
        return con;
    } catch (error) {
        console.log(`Ocorreu um erro ao conectar ao MySQL: ${error}`);
    }
}

module.exports = { conn };