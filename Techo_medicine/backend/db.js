const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI || "mongodb+srv://chhavikapasiya77:@pass0443@cluster0.xb5tu.mongodb.net/";


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 30000, 
        });
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
};

module.exports = connectToMongo;
