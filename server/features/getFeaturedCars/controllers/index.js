const fs = require("fs");
const path = require("path");
const { uploadCars } = require("../database/methods/index.js");


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
  for (const file of files) {
    try {
      await uploadCars(file);
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

module.exports = {
  upload,
};
