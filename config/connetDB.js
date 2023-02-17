import mysql from 'mysql2/promise';
const pool = mysql.createPool({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12598875',
    port: 3306,
    password: 'AnZhwru2A4',
    database: 'sql12598875'
})
export default pool