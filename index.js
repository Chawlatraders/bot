const jsonfile=require('jsonfile');
const FILE_PATH="./data.json";
const moment = require('moment');
const simpleGit=require('simple-git')

const makeCommit=(x,y)=> {


const DATE=moment().subtract(1,'y').add(1,'d')
                    // add(x,'w').add(y,'d').format(); add x weeks and y days
                    .add(x,'w').add(y,'d').format();
const data={
    date:DATE
}
// writes some data in the file
jsonfile.writeFile(FILE_PATH,data);


simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE})
}
makeCommit(0,4);