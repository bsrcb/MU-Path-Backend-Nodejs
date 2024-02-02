const fs = require('fs');;
const path = require('path');

let createPath = function(path){
    console.log("creating Path")
    console.log(path)
    return new Promise((resolve, reject) => {
        fs.mkdir(path, {recursive: true}, (err) => {
            if(err){
                console.log("error from create path")
                console.log(err)
                reject(err);
            }else{
                reject("ok");
            }
        })
    })
    .catch((err) => {
        return err;
    })
}
module.exports = createPath;
