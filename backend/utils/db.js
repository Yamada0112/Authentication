const mongoose = require("mongoose")

const URI = process.env.MONGO_URI

const connectDB = async () => {
    if (!URI) {
        console.error("Mongodb URI is not defined!");
        process.exit(1) //exit if URI is not set
    }
    try {
        const conn = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "Venus" //replace with my actual database name
        })
        console.log("MongoDB Database Connected Successfully");

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
}


module.exports = connectDB