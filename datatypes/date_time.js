// const now = new Date();
// console.log(now); //(current date and time with milliseconds)

// const specificDate = new Date(2024, 4, 19, 10, 30, 0); // Year, month (0-indexed), day, hour, minute, second
// console.log(specificDate); 

// const millisecondsSinceEpoch = Date.parse("2023-11-19");
// console.log(millisecondsSinceEpoch); 


//Formatting dates
const now = new Date();
const formattedDate = now.toLocaleDateString("en-US");
const formattedTime = now.toLocaleTimeString("en-US");

console.log(formattedDate); // Output: 5/19/2024 (example format in US locale)
console.log(formattedTime); // Output: 10:13:28 AM (example format in US locale)

// const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// const formattedDate = ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()};

// console.log(formattedDate); // Output: May 19, 2024 (custom format)