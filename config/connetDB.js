import mysql from 'mysql2/promise';
const pool = mysql.createPool({
    host: 'db4free.net',
    user: 'ttcntt',
    port: 3306,
    password: 'Viet29112001',
    database: 'ttcntt'
})
export default pool
