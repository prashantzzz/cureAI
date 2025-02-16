const express = require('express');
const multer = require('multer');
const fs = require('fs').promises;
const { HfInference } = require('@huggingface/inference');
const path = require('path');
const os = require('os');
const qrcode = require('qrcode');

const app = express();
const upload = multer({ dest: 'uploads/' });
const HF_TOKEN = process.env.HF_TOKEN;; 
const inference = new HfInference(HF_TOKEN);

// Function to remove duplicate words
function rem_dup(sentence) {
    const words = sentence.split(/\s+/);
    const uniqueWords = new Set(words);
    return [...uniqueWords].join(' ');
}

app.use(express.static(path.join(__dirname, 'public')));

// Function to clear the uploads folder
async function clearUploadsFolder() {
    try {
        const files = await fs.readdir('uploads/');
        await Promise.all(files.map(file => fs.unlink(path.join('uploads', file))));
    } catch (err) {
        console.error('Error clearing uploads folder:', err);
    }
}
 
// Endpoint to handle image upload
app.post('/upload', upload.single('image'), async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const imagePath = req.file.path;
        const imageData = await fs.readFile(imagePath);

        // Perform image to text inference
        const result = await inference.imageToText({
            data: imageData, // Ensure imageData is in the correct format
            model: 'Salesforce/blip-image-captioning-base',
        });

        result.generated_text = rem_dup(result.generated_text);

        res.json({ text: result.generated_text });
         // Clear the uploads folder after the image is processed
         await clearUploadsFolder();
    } catch (error) {
        console.error('Error occurred during inference:', error);
        res.status(500).json({ error: 'An error occurred during inference' });
    }
});


// Function to get the local IPv4 address
function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

// const PORT = process.env.PORT || 3000;
// const ipv4Address = getLocalIpAddress();

// app.listen(PORT, '0.0.0.0', () => {
//     const url = `http://${ipv4Address}:${PORT}`;
//     console.log(`Server running on ${url}`);
    
    
// });

// Start the server
const PORT = process.env.PORT || 3000; // Use Render's PORT environment variable
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };