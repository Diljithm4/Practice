// Asynchronous function using callbacks
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = "Data from the server";
      callback(data);
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  // Using the asynchronous function with a callback
  fetchDataWithCallback((result) => {
    console.log(result); // Output: Data from the server
  });


  // Asynchronous function using Promises
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          resolve("Data from the server");
        } else {
          reject(new Error("Failed to fetch data"));
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }

  
  // Using the asynchronous function with Promises
  fetchDataWithPromise()
    .then((result) => {
      console.log(result); // Output: Data from the server
    })
    .catch((error) => {
      console.error(error.message); // Output: Failed to fetch data
    });


    // Asynchronous function using async/await
async function fetchDataWithAsyncAwait() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from the server");
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  
  // Using the asynchronous function with async/await
  async function fetchDataAndPrint() {
    try {
      const result = await fetchDataWithAsyncAwait();
      console.log(result); // Output: Data from the server
    } catch (error) {
      console.error(error.message);
    }
  }
  
  fetchDataAndPrint();
  