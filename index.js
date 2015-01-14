var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync('hello world', salt);
console.log('  --- === ---');
console.log('If you see a long string of characters below then your Node.js is working.');
console.log('If you see an error, either below or above, it means your Node.js is not working.');
console.log(hash);
console.log('  --- === ---');