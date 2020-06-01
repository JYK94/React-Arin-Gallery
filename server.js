const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');        // db 정보 getJSON
const conf = JSON.parse(data);                          // db정보 json parsing
const mysql = require('mysql');

// db정보 변수
const connection = mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password: conf.password,
    prot:conf.port,
    database:conf.database
});

connection.connect();       // 위 정보로 connect()

app.get('/api/bbsInfo', (req, res) => {
    // SELECT 질의 쿼리
    const sqlQuery = 'SELECT A.*, B.USER_NM, 1 AS LIKE_CNT, F.FILE_PATH'
                    +'  FROM BBS_ARIN A'
                    +'  LEFT OUTER JOIN SYS_USER_MGT B'
                    +'     ON A.WRT_USER_ID = B.USER_ID'
                    +'  LEFT OUTER JOIN SYS_FILE F'
                    +'     ON A.BBS_NO = F.BBS_NO'
                    +'    AND A.SEQ = F.SEQ';

    connection.query(
        sqlQuery,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));