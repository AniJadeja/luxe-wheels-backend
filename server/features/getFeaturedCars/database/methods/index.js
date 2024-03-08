const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const FeaturedCarsImages = require("../models/index.js");
// const uploadCars = async (filePath) => {
//     // call the database method to upload the cars
//     const storage = multer.memoryStorage();
//     const uploadMiddleware = multer({ storage }).single('image');

//     await uploadMiddleware(filePath, null, async (err) => {
//         if (err) {
//             console.error('Error uploading file:', err);
//             return;
//         }   
//         try {
//             // Create new image document
//             const newImage = new Image({
//                 name: filePath.split('/').pop(), 
//                 data: req.file.buffer,
//                 contentType: req.file.mimetype
//             });
//             // Save image to MongoDB
//             await newImage.save();
//         } catch (error) {
//             console.error('Error saving image to MongoDB:', error);
//         }
//     });
// }


// Function to upload cars
const uploadCars = async (filePath) => {
    try {
        // Read file data
        const data = fs.readFileSync(filePath);

        // Create new image document
        const newImage = new FeaturedCarsImages({
            name: path.basename(filePath),
            data: data,
            contentType: 'image/jpeg' // Adjust as per your file type
        });

        // Save image to MongoDB
        await newImage.save();
        console.log(`File ${path.basename(filePath)} uploaded successfully`);
    } catch (error) {
        console.error('Error uploading file:', error);
        throw new Error('Error uploading file');``
    }
};

module.exports = {
    uploadCars
}