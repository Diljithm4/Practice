let map = new Map();

map.set("Diljith", ".NET");
map.set("Rasheed", "Data Science");
map.set("Aiswarya", "Java");
map.set("Aleena", "ML");

//console.log(map.keys());

// for(let[key, value] of map){
//     console.log(key, ":", value);
// }

map.forEach((value, key) => {
    console.log(key, ":", value);
});