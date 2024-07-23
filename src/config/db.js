import mongoose, { mongo } from "mongoose";
import { config } from "./config.js";

const dbUri = config.dbUri;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUri);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
