import learnerModel from "../models/learnerModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    cohorte,
    description,
    entreprise,
  } = req.body;

  if (
    !nom &&
    nom.trim() === "" &&
    !postnom &&
    postnom.trim() === "" &&
    !prenom &&
    prenom.trim() === "" &&
    !sexe &&
    sexe.trim() === "" &&
    !image &&
    image.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === "" &&
    !contact &&
    contact.trim() === "" &&
    !filiere &&
    filiere.trim() === "" &&
    !cohorte &&
    cohorte.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !entreprise &&
    entreprise.trim() === ""
  ) {
    res.status(500).json({
      message: "You must geting word",
    });
  }

  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    try {
      const learner = await learnerModel.create({
        nom: req.body.nom,
        postnom: req.body.postnom,
        prenom: req.body.prenom,
        sexe: req.body.sexe,
        image: req.body.image,
        email: req.body.email,
        password: hash,
        contact: req.body.contact,
        filiere: req.body.filiere,
        cohorte: req.body.cohorte,
        description: req.body.description,
        entreprise: req.body.entreprise,
      });
      if (!learner) {
        res.status(400).json({ message: "Interval server Error" });
      } else {
        res.status(201).json({ learner, message: "Learner Added" });
      }
    } catch (err) {
      return new Error(err);
    }
  });
};

export const getOnLearner = async (req, res) => {
  const id = req.query.id;

  try {
    const learner = await learnerModel.findById(id);
    if (!learner) {
      res.status(500).json({ message: "No Learner Find" });
    } else {
      res.status(200).json({ learner, message: "Successfull" });
    }
  } catch (err) {
    return new Error(err);
  }
};

export const deleteLearner = async (req, res) => {
  const id = req.query.id;
  try {
    const learner = await learnerModel.findByIdAndRemove(id);
    if (!learner) {
      res.status(500).json({ message: "Unable to delete" });
    } else {
      res.status(200).json({ message: "Learner Deleted" });
    }
  } catch (err) {
    return new Error(err);
  }
};

export const putLearner = async (req, res) => {
  const id = req.query.id;
  console.log(id);
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
    cohorte,
    description,
    entreprise,
  } = req.body;

  if (
    !nom &&
    nom.trim() === "" &&
    !postnom &&
    postnom.trim() === "" &&
    !prenom &&
    prenom.trim() === "" &&
    !sexe &&
    sexe.trim() === "" &&
    !image &&
    image.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === "" &&
    !contact &&
    contact.trim() === "" &&
    !filiere &&
    filiere.trim() === "" &&
    !cohorte &&
    cohorte.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !entreprise &&
    entreprise.trim() === ""
  ) {
    res.status(422).json({
      message:
        "Nom, Prenom, Prenom, Sexe, image, email, password, filiere and cohorte are required input",
    });
  }

  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    try {
      const learner = await learnerModel.findByIdAndUpdate(id, {
        nom: req.body.nom,
        postnom: req.body.postnom,
        prenom: req.body.prenom,
        sexe: req.body.sexe,
        image: req.body.image,
        email: req.body.email,
        password: hash,
        contact: req.body.contact,
        filiere: req.body.filiere,
        cohorte: req.body.cohorte,
        description: req.body.description,
        entreprise: req.body.entreprise,
      });

      if (!learner) {
        res.status(500).json({ message: "Interval Server Error" });
      } else {
        res.status(200).json({ learner, message: "Successfull" });
      }
    } catch (err) {
      return new Error(err);
    }
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await learnerModel.findOne({ email, password });

  try {
    if (!user) {
      res.status(401).json({ message: "Identify or password incorrect" });
    } else {
      const valid = bcrypt.compare(req.body.password, user.password);
      try {
        if (!valid) {
          res.status(401).json({ message: "Identify or password incorrect" });
        } else {
          res.status(200).json({
            user,
            token: "Bearer "+ jwt.sign(
              { learnerId: user._id }, 
              "RANDOM_TOKEN_SECRET", 
              { expiresIn: "24h", }
            ),
            success: true,
            message: "User Find",
          });
        }
      } catch (err) {
        new Error(err);
      }
    }
  } catch (err) {
    return new Error(err);
  }
};
