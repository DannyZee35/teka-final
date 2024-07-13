// dbConfig.js
import mongoose from "mongoose";
import User from "@models/userModel";
import Blog from "@models/blogSchema";
import Customer from "@models/customerSchema";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        
        });

        console.log("MongoDB Connected");

        // Register User model schema
        await User.init();

        // Register Blog model schema
        await Blog.init();
        await Customer.init();

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export { connectDB };
