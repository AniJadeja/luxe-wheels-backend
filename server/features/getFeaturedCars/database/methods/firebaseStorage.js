const admin = require("firebase-admin");
const serviceAccount = require("../../../../../serviceAccountKey.json");
const { getDownloadURL } = require("firebase-admin/storage");
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://luxe-wheels.appspot.com",
});

// Get a reference to the storage service
const storage = admin.storage();
const bucket = storage.bucket();

// Function to upload image
async function uploadImage(localFilePath, destinationFilePath) {
  try {
    // Upload the image
    await bucket
      .upload(localFilePath, {
        destination: destinationFilePath,
      })
      
      const [url] = await bucket.file(destinationFilePath).getSignedUrl({
        action: "read",
        expires: "01-01-2100", // Adjust the expiration date as needed
      });

      return url;

    console.log(`Image uploaded successfully. URL: ${url}`);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
}

module.exports = { uploadImage };
