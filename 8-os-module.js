const os = require ('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// System uptime in seconds
console.log(`The system uptime is ${Math.round(os.uptime() / 3600)} hours`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);