const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const AllCars = require("../models/index.js");
const {uploadImage} = require("../methods/firebaseStorage.js");
const sharp = require("sharp");

// Function to upload cars
// const uploadCars = async (filePath) => {
//   try {
//     // Read file data
//     const data = fs.readFileSync(filePath);

//     // Create new image document
//     const newImage = new FeaturedCarsImages({
//       name: path.basename(filePath),
//       data: data,
//       contentType: "image/jpeg", // Adjust as per your file type
//     });

//     // Save image to MongoDB
//     await newImage.save();
//     console.log(`File ${path.basename(filePath)} uploaded successfully`);
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     throw new Error("Error uploading file");
//     ``;
//   }
// };

const updateCars = async ({car}) => {
  try {
    const newCar = await AllCars.create(car);
    if (!newCar) throw new Error("Error updating cars");
  } catch (error) {
    console.error("Error updating cars:", error);
    throw new Error("Error updating cars");
  }
}


// const fetchAllCars = async () => {
//   try {
//     let cars = await FeaturedCarsImages.findOne();
//     cars = Buffer.from(cars.data);
//     sharp(cars)
//     .toFormat('jpeg') // or 'png', 'webp', etc. as per your requirement
//     .toBuffer()
//     .then((buffer) => {
//         // Convert buffer to base64 string
//         return buffer.toString('base64');
//     })
//     .catch((err) => {
//         console.error('Error converting image:', err);
//         throw new Error('Error converting image');
//     });
//     console.log("Cars fetched successfully");
//     console.log(cars);
//     return cars;
//   } catch (error) {
//     console.error("Error getting cars:", error);
//     throw new Error("Error getting cars");
//   }
// };

module.exports = {
  // uploadCars,
  updateCars,
  // fetchAllCars,
  // uploadImage,
};
