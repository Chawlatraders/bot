const jsonfile=require('jsonfile');
const FILE_PATH="./data.json";
const moment = require('moment');
const simpleGit=require('simple-git');
const random=require('random');

const makeCommit=(n)=> {
    if(n===0) return simpleGit().push();  //when all commit are done then only we should push bcoz pusing is a time consuming process
const x=random.int(0,54)//for weeks
const y=random.int(0,6)//for days

const DATE=moment().subtract(1,'y').add(1,'d')
                    // add(x,'w').add(y,'d').format(); add x weeks and y days
                    .add(x,'w').add(y,'d').format();
const data={
    date:DATE
}
// writes some new data every time in the file so that changes are detected in commit
jsonfile.writeFile(FILE_PATH,data);


simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE},makeCommit.bind(this,--n)); 
                        
}
makeCommit(100);//No: of random commit function