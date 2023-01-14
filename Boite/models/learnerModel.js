import mongoose from "mongoose";

const learnerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  postnom: {
    type: String,
    required: true,
  },
  sexe: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String || Number,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  entreprise: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Learner || mongoose.model("Learner", learnerSchema);

