import mongoose from "mongoose";


const DbCon = async (req, res) => {
    try {
      const connection = await mongoose.connect(process.env.MONGODB_URL);
      console.log("MongoDB Connected Successfully!");
      return connection;
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "MongoDB connection Failed!" });
    }
  };
  export default DbCon;