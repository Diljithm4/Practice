const user = {
    id: 1,
    name: 'John',
    address: {
        city: 'kochi',
        postalCode: '10001',
    },
    contacts: {
        email: 'Diljith@example.com',
    },
};

const city = user?.address?.city;
const email = user?.contacts?.email;
const phoneNumber = user?.contacts?.phone; 

console.log('City:', city); 
console.log('Email:', email); 
console.log('Phone Number:', phoneNumber); 
