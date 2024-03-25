function divideNumbers(a, b) {
    try {
      // Attempting to perform the division
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
  
      const result = a / b;
      return result;
    } catch (error) {
      // Handling the exception
      console.error("An error occurred:", error.message);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  }
  
  // Example usage:
  try {
    const result1 = divideNumbers(10, 2);
    console.log("Result 1:", result1);
  
    const result2 = divideNumbers(8, 0);
    // The following line will not be executed due to the exception
    console.log("Result 2:", result2);
  } catch (error) {
    // Handling exceptions that occurred within the try block
    console.error("Outer catch block:", error.message);
  } finally {
    // Code in the finally block is executed regardless of whether an exception occurred or not
    console.log("Finally block executed.");
  }
  