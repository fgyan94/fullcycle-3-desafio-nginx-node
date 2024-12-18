const express= require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(config)

app.get('/', async (req, res) => {
  connection.query(`INSERT INTO people(name) VALUES('Nome - ${new Date().getTime()}')`)
  
  res.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('SIGINT', () => {
  connection.end((err) => {
    if (err) {
      console.error('Erro ao encerrar a conexão:', err);
    } else {
      console.log('Conexão encerrada.');
    }
    process.exit();
  });
})