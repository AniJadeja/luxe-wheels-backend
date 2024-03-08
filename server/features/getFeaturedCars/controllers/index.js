const fs = require("fs");
const path = require("path");
const { uploadCars, fetchAllCars, updateCars } = require("../database/methods/index.js");
const { uploadImage } = require("../database/methods/firebaseStorage.js");
const { getDownloadURL } = require("firebase-admin/storage");
const generate3DigitRandomNumber = require("../../../utils/generate3DigitRandomNumber.js");

// Function to recursively read files from a directory
function readFilesFromDir(dirPath2, fileList) {
  const files = fs.readdirSync(dirPath2);
  fileList = fileList || [];

  files.forEach((file) => {
    const filePath = path.join(dirPath2, file);
    if (fs.statSync(filePath).isDirectory()) {
      // If it's a directory, recursively call the function
      readFilesFromDir(filePath, fileList);
    } else {
      // If it's a file, add its path to the list
      fileList.push(filePath);
    }
  });
  return fileList;
}

const upload = async (req, res) => {
  const dirPath = "server/utils/assets/images"; // Directory path
  const files = readFilesFromDir(dirPath);
  const firstNames = [
    "Liam",
    "Olivia",
    "Noah",
    "Emma",
    "Oliver",
    "Ava",
    "William",
    "Sophia",
    "Elijah",
    "Isabella",
    "James",
    "Charlotte",
    "Benjamin",
    "Amelia",
    "Lucas",
    "Mia",
    "Henry",
    "Harper",
    "Alexander",
    "Evelyn",
  ];

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
  ];

  for (const file of files) {
    try {
      const file2 = file.split("\\").pop().replace(/_/g, " ");
    

      const destinationFilePath = `images/${file2}`; // Destination path in Firebase Storage

      const uploadedImage = await uploadImage(file, destinationFilePath);
      const baseCarData = file.split("\\").pop().split("_");
      const carType = baseCarData[baseCarData.length - 1].split(".")[0];
      let name = "";
      for (let i = 0; i < baseCarData.length - 1; i++) {
        name += baseCarData[i];
        name += " ";
      }
      const ownerName = `${firstNames[Math.floor(Math.random() * 20)]} ${ lastNames[Math.floor(Math.random() * 20)]}`;
      const price = "$" + generate3DigitRandomNumber();
      const milage = generate3DigitRandomNumber();
      const carCondition = "New";
   

      const car = {
        name: name,
        carType : carType,
        ownerName : ownerName,
        price : price,
        milage : milage,
        carCondition : carCondition,
        photo: uploadedImage,
      };
      //console.log("car", car);

      await updateCars({ car });
      console.log(`File ${name} uploaded successfully`);
      // await uploadCars(file);
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).send("Error uploading file");
      return false;
    }
  }
  console.log("Files uploaded successfully");
  res.status(200).send("Files uploaded successfully");
  return true;
};

const getAllCars = async (req, res) => {
  try {
    const cars = await fetchAllCars();
    if (!cars) {
      console.error("Error getting cars");
      throw new Error("Error getting cars");
    }
    const respose = {
      name: "Toyota Corolla",
      photo: cars,
      price: "#239",
      ownerName: "Jeff Su",
      milage: "200",
      carCondition: "New",
    };
    res.status(200).json(respose);
    return cars;
  } catch (error) {
    console.error("Error getting cars:", error);
    res.status(500).send("Error getting cars");
  }
};

module.exports = {
  upload,
  getAllCars,
};
