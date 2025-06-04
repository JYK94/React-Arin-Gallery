const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');        // db 정보 getJSON
const conf = JSON.parse(data);                          // db정보 json parsing
const mysql = require('mysql2');

// db정보 변수
const connection = mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password: conf.password,
    port:conf.port,
    database:conf.database
    // host:'localhost',
    // user:'PROJ_REACT',
    // password: 'REACT1004@',
    // port:'3306',
    // database:'PROJ_REACT'
});

connection.connect();       // 위 정보로 connect()

// bbsInfo 게시글 조회
app.get('/api/bbsInfo', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    // SELECT 질의 쿼리
    const sqlQuery = `SELECT A.*, B.USER_NM, 1 AS LIKE_CNT, CONCAT( F.FILE_PATH, F.FILE_NM ) AS FILE_PATH`
                    +`  FROM BBS_ARIN A`
                    +`  INNER JOIN SYS_USER_MGT B`
                    +`     ON A.WRT_USER_ID = B.USER_ID`
                    +`  LEFT OUTER JOIN SYS_FILE F`
                    +`     ON A.BBS_NO = F.BBS_NO`
                    +`    AND A.SEQ = F.SEQ`
                    +`  LIMIT ${limit} OFFSET ${offset}`;

    // const sqlQuery = "SELECT 'DD' AS USER_NM, 2 AS LIKE_CNT, 'https://i.pinimg.com/236x/a4/48/df/a448df00b6aad5de28cfaed31a4fba68.jpg' as FILE_PATH, 'DD1' AS BBS_NO, '20' AS CONTENT, 2 AS SEQ"
    //             + "   FROM DUAL"
    // ;

    connection.query(sqlQuery, (err, rows, fields) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data');
            return;
        }
        res.send(rows);
    });
});

// userInfo 사용자 조회
app.get('/api/userInfo', (req, res) => {
    // SELECT 질의 쿼리
    const sqlQuery = 'SELECT USER_ID, USER_NM, PW, SIGN_DT, EMAIL'
                    +'  FROM SYS_USER_MGT'
                    +" WHERE USER_ID = 'admin'";

    connection.query(
        sqlQuery,
        (err, rows, fields) => {
            res.send(rows);
        } 
    )
});

// 게시글 INSERT
app.get('/api/bbsInsert', (req, res) => {
    // SELECT 질의 쿼리
    const sqlQuery = "INSERT INTO BBS_ARIN"
                    + "    VALUES ( DATE_FORMAT(now(), '%Y%m%d')"
                    + "             ,(SELECT IFNULL(MAX(SEQ),0) + 1 FROM BBS_ARIN WHERE BBS_NO = DATE_FORMAT(now(), '%Y%m%d'))";
                    + "             , ?, ?, ?, ?, now(), ?, now(), ?)";

    let params = [
        req.body.TITLE
        ,req.body.CONTENT
        ,req.body.WRT_USER_ID
        ,req.body.WRT_USER_ID
        ,req.body.WRT_USER_ID
    ];

    connection.query(
        sqlQuery, params,
        (err, result) => {
            res.redirect(result.insertId);
        }
    )
    
    

});

app.listen(port, () => console.log(`Listening on port ${port}`));