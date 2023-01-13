import mongoose, { mongo } from "mongoose";
const connectMongoDB = async () => {
  if (mongoose.connection[0]) {
    return;
  }
  await mongoose
    .connect(
      "mongodb+srv://jeannotds:jeannot1997@cluster0.f0osgcn.mongodb.net/learnerkda?retryWrites=true&w=majority"
    )
    .then((res) => console.log("Connected To MongoDB"))
    .catch((error) => console.log(error));
};

export default connectMongoDB;
