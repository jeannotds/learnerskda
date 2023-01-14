import mongoose from "mongoose";

const learnerSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  postnom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  sexe: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
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
  },
  filiere: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  entreprise: {
    type: String,
  },
});

export default mongoose.models.Learner || mongoose.model("Learner", learnerSchema);

