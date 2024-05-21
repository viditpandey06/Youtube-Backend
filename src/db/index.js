import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MongoDB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Connected to MongoDB, connectionInstance${connectionInstance.connection}`
    );
  } catch (error) {
    console.error("Error:", error);
    //throw error;
    process.exit(1);
  }
};

export default connectDB;
