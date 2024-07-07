// Importing required modules
const { HfInference } = require("@huggingface/inference");
const fs = require('fs').promises; // Importing the fs module

function rem_dup(sentence) {
    // Split the sentence into words
    const words = sentence.split(/\s+/);

    // Create a Set to store unique words
    const uniqueWords = new Set(words);

    // Convert the Set back to an array and join the words into a string
    const result = [...uniqueWords].join(' ');
    return result;
}

// Function to perform image to text inference
async function performImageToTextInference() {
    const HF_TOKEN = "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"; 
    // Creating instance of HfInference
    const inference = new HfInference(HF_TOKEN);

    try {
        const imageUrl = "C:\\Users\\asus\\Downloads\\demo1.jpg";
        // Reading the image file
        const imageData = await fs.readFile(imageUrl);
        console.log('Analyzing image..')
        
        // Performing image to text inference
        const result = await inference.imageToText({
            data: imageData,
            model: "Salesforce/blip-image-captioning-base",
        });
        result.generated_text = rem_dup(result.generated_text);
        console.log("Inference Result:", result.generated_text);
    } catch (error) {
        console.error("Error occurred during inference:", error);
    }
}

// Calling the function to perform inference
performImageToTextInference();