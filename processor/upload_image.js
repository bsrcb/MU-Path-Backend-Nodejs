const fs = require('fs/promises');
const FormData = require('form-data');
const axios =require('axios');
const path = require('path');
const Blob = require('blob');

async function upload_image(workPath,imgName){
    let imgPath= workPath + "img/" + imgName
    uploadPath = workPath + "img/"
    const imageBuffer =await fs.readFile(imgPath);
    // Create a Blob from the image buffer
    //const imageBlob = new Blob([imageBuffer], { type: 'image/jpeg' });

    // Create a FormData object to send the data including the image, upload path, and image name
    const formData = new FormData();
    formData.append('image', imageBuffer, imgName);
    formData.append('uploadPath', uploadPath);
    formData.append('imageName', imgName);

    // Send the FormData to the Python API
    //https://pathway-python-4zi57lw7eq-uc.a.run.app/upload_image
    return axios.post("https://pathway-python-4zi57lw7eq-uc.a.run.app/upload_image", formData, {
        headers: {
         ...formData.getHeaders(),
        },
    })
    .then(response => {
        console.log('Image sent successfully:', response.data);
        return 'success'
    })
    .catch(error => {
        console.error('Error sending image:', error);
        return 'fail'
    });
}

module.exports = upload_image;
