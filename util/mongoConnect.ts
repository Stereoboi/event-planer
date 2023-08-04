import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as any);
    mongoose.set("strictQuery", true);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
