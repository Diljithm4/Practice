const fs = require('fs');

// Function to read JSON data from a file
function readJsonFromFile(filePath) {
  try {
    const jsonContent = fs.readFileSync(filePath, 'utf-8');
    const jsonData = JSON.parse(jsonContent);
    console.log('Parsed JSON Data:', jsonData);
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
  }
}

// Provide the file path to the function
readJsonFromFile('SampleJson/sample1.json');
