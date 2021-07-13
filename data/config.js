const mysql = require('mysql');

const config = {
    host: '52.86.154.61',
    user: 'brinkmanm',
    password: 'EhXkUNYzMGmbVKpw',
    database: 'brinkmanm',
};

const pool = mysql.createPool(config);

module.exports = pool;