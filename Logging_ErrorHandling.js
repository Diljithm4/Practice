//logging in try catch 
try {
    // Code that might throw an error
    const result = sampleFunction();
    console.log(result);
} catch (error) {
    console.error('An error occurred! :', error.message);
}

//throwing custoem error

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error('Error:', error.message);
}

//Async Await with try catch

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


