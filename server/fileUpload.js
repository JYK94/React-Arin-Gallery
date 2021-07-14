const app = express();

const multer = require('multer');       // 파일업로드 관련 lib
const moment = require('moment');       // 시간 관련 lib

const FILE_PATH = "images";

const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, FILE_PATH);        // 파일 저장 경로
    },
    filename: function (req, file, cb) {
        cb(null, moment().format('YYYYMMDDHHmmss') + "_1");
    }
});

const upload = multer({ storage: storage }).single("file");     // 하나의 파일업로드

module.exports = upload;

