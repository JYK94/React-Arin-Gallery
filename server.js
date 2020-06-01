const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/bbsInfo', (req, res) => {
    res.send([
        { 
            key : 'ARIN-0001',
            name : '아린',
            bbsNo : 'ARIN-0001',
            content : 'like arin',
            seq : 1,
            likeCnt : 3,
            nSrc : '/images/5.jpg'
        },
        {
            key : 'ARIN-0002',
            name : '아린2',
            bbsNo : 'ARIN-0002',
            content : 'like arin3',
            seq : 2,
            likeCnt : 2,
            nSrc : '/images/2.jpg'
        },
        {
            key : 'ARIN-0003',
            name : '아린3',
            bbsNo : 'ARIN-0003',
            content : 'like arin3',
            seq : 3,
            likeCnt : 5,
            nSrc : '/images/3.jpg'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));