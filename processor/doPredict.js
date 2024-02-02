//const exec = require('child_process').exec;
const fs = require('fs');
const request = require('request-promise');
const axios =require('axios');
const path = require('path');


async function doPredict(cmd){

    //do prediction
    const data={
        "cmd": cmd
    };
    // let options ={
    //     method: 'POST',
    //     uri: 'http://127.0.0.1:5000/predict',
    //     body: data,
    //     json: true
    // };
    //https://pathway-python-4zi57lw7eq-uc.a.run.app
    try {
        const response = await axios.post('https://pathway-python-4zi57lw7eq-uc.a.run.app/predict', data);

        console.log("predict OK!");
        console.log('Response from Python API:', response.data);
        return 'ok';
    } catch (error) {
        console.error('Error:', error.message);
        return 'failed';
    }
    //     exec(cmd, (error, stdout, stderr) => {
    //         if (error) {
    //             console.log(`exec error: ${error}`);
    //             reject('failed');
    //         }else{
    //             //stdout
    //             console.log("predict OK!");
    //             resolve('ok')
    //         }
    //     });
}

module.exports = doPredict;
