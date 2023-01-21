import mongoose from "mongoose";

const inscripttionSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
});
