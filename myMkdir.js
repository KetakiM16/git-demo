#!/usr/bin/env node
let fs = require("fs");

(function(){
    let n = process.argv[2]
    let name = process.argv[3]
    //if(!Number.isString(+n)||typeof name ==!string||n<=0)
    if(!Number.isInteger(+n) || n <= 0){ 
        console.log("invalid file")
        return;
     }
     
     try{
    if(fs.existsSync(`${name}-0)`)) {
    for (i=0; i< n;i++){
        fs.rmdirSync(`${name}-${i}`)
    }
    }
    else{
        for (i=0; i< n;i++){
            fs.mkdirSync(`${name}-${i}`)
    }
}


} catch(err){
    console.log("sorry error occured,possibly n is greter than expected")
}

})();
 







