import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.plugin(mongooseUniqueValidator);

export default mongoose.models.User || mongoose.model("User", userSchema);
