import mongoose from "mongoose";

async function connectDB() {
    try {
        const res  = await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
            dbName:'echo_verse'
        });
        
        console.log('connection successfully established');
    } catch (error) {
        console.log('error:', error);
    }
}

export default connectDB;