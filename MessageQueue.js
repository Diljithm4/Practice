function asyncOperation(message) {
    setTimeout(() => {
        console.log(message);
    }, 2000);
}

function messageQueueExample() {
    console.log('Start of script');

    asyncOperation('Async operation 1');

    console.log('Synchronous task');

    asyncOperation('Async operation 2');

    console.log('Another synchronous task');

    console.log('End of script');
}

messageQueueExample();
