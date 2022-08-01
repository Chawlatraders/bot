const jsonfile=require('jsonfile');
const FILE_PATH="./data.json";
const moment = require('moment');
const simpleGit=require('simple-git')




const DATE=moment().subtract(1,'d').format();
const data={
    date:DATE
}
// writes some data in the file
jsonfile.writeFile(FILE_PATH,data);


simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE})

