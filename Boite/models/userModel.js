import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  nom: { type: String, required: true },
  gmail: { type: String, required: true },
  password: { type: String, required: true, unique: true },
});

export default mongoose.medels.User || mongoose.medel("User", userModel);
