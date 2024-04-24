const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'aulaback',
    password: 'ds564',
    port: 7007,
});
