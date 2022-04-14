const mysql=require('mysql');

let con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'equipo_serpiente'
});

con.connect();


con.query('insert into jugador values(3, "Triko", "123", 2)', (err, res, campos) => {
    console.log(res);
});

// PARA INSERTAR  NUEVOS REGISTROS
con.query('select * from jugador', (err, res, campos) => {
    console.log(res);
});

con.end();