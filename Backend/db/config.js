const mongoose = require("mongoose");
// Middleware
const MONGO_URI = 'mongodb+srv://vigneshshankar2436:toodoo@cluster0.gpbq3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// Connect to MongoDB using the connection string
mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// // mongodb://localhost:27017 



// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/BookStore', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// });
