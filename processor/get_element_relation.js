const fs = require('fs');
const axios = require('axios');
const path = require('path');
const decompress = require('decompress');

async function get_element_relation(imageName) {
    console.log('getting elements and relation files');
    const path_to_save_zip = './' ;
    const zipFileName = 'output.zip';
    //https://pathway-python-4zi57lw7eq-uc.a.run.app

    try {
        const response = await axios.get('https://pathway-python-4zi57lw7eq-uc.a.run.app/get_element_relation', {
            params: {
                imgName: imageName
            },
            responseType: 'arraybuffer',  // This ensures we get binary data
        });

        // Save the binary data to a zip file
        const zipFilePath = path.join(path_to_save_zip, zipFileName);
        fs.writeFileSync(zipFilePath, response.data);

        await decompress(zipFilePath, 'output');

        console.log('Zip file downloaded and saved:', zipFilePath);
        return true;
    } catch (error) {
        console.error('Error downloading zip file:', error);
        return false;
    }
}

module.exports = get_element_relation;
