const vision = require('@google-cloud/vision');

async function detectText() {
  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  fileName = "C:/Users/asus/Desktop/prescription.jpeg";

  // Performs text detection on the local file
  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations;
  console.log('Text:');
  detections.forEach(text => console.log(text));
}

detectText(); // Call the async function to run the code
