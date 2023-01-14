import learnerModel from "../models/learnerModel";

export const getLearners = async (req, res) => {
  const learners = await learnerModel.find();

  try {
    if (!learners) {
      res.status(500).json({ message: "Internal Server Error" });
    }

    if (learners.length === 0) {
      res.status(500).json({ message: "No Learner Found" });
    } else {
      res.status(200).json({ learners, message: "Result Successfull" });
    }
  } catch (err) {
    return new Error(err);
  }
};

export const postLearner = async (req, res) => {
  const {
    nom,
    postnom,
    prenom,
    sexe,
    image,
    email,
    password,
    contact,
    filiere,
    description,
    entreprise,
  } = req.body;

  if (
        
    nom.trim() === "" &&
    postnom.trim() === "" &&
    prenom.trim() === "" &&
    sexe.trim() === "" &&
    image.trim() === "" &&
    email.trim() === "" &&
    password.trim() === "" &&
    contact.trim() === "" &&
    filiere.trim() === ""

  ) {
    res
      .status(500)
      .json({ message: "Nom, Prenom, Prenom et Sexe are required input" });
  }

  try {
    const learner = await learnerModel.create(req.body);
    if (!learner) {
      res.status(400).json({ message: "Interval server Error" });
    } else {
      res.status(201).json({ learner, message: "Learner Added" });
    }
  } catch (err) {
    return new Error(err);
  }
};
