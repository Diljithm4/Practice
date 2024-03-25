// Sample JSON data as a string
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Parsing the JSON string
try {
  const jsonData = JSON.parse(jsonString);
  console.log('Parsed JSON Data:', jsonData);
} catch (error) {
  console.error('Error parsing JSON:', error);
}