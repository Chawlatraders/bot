const jsonfile=require('jsonfile');
const FILE_PATH="./data.json";
const moment = require('moment');
const simleGit=require('simple-git')




const DATE=moment().subtract(5,'d').format();
const data={
    date:DATE
}
// writes some data in the file
jsonfile.writeFile(FILE_PATH,data);

// git commit --date="11/5/2022"
simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}) 
