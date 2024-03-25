
// Creating a simple function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const data = { message: "Data successfully fetched!" };
        // Resolve the promise with the data
        resolve(data);
        // Uncomment the line below to simulate an error
        // reject(new Error("Failed to fetch data."));
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using the promise
  fetchData()
    .then((result) => {
      console.log(result.message); 
    })
    .catch((error) => {
      console.error("Error:", error.message);
    })
    .finally(() => {
      console.log("Promise settled.");
    });
  
 //Chaining Promises
  
  // Creating another promise function
  function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Processing the data (e.g., transforming it)
        const processedData = { ...data, status: "Processed" };
        // Resolve the promise with the processed data
        resolve(processedData);
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  // Chaining promises
  fetchData()
    .then(processData)
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  