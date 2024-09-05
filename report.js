const newman = require('newman');
//require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/24145992-53f9c2b9-f82b-406f-8622-867f73e222fb?access_key=${env.process.secretKey} `,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
