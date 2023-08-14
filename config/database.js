const mongoose = require('mongoose')
const URI = "mongodb://localhost:27017/c-system"

mongoose.connect(URI)
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log(err);
})