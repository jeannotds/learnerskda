import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

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
    unique:true
  },
  password: {
    type: String || Number,
    required: true,
  },
  contact: {
    type: Number,
    required: false,
  },
  filiere: {
    type: String,
    required: true,
  },
  cohorte: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  entreprise: {
    type: String,
    required: false,
  },
});

learnerSchema.plugin(mongooseUniqueValidator)

export default mongoose.models.Learner || mongoose.model("Learner", learnerSchema);

