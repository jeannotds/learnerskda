import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt, { sign } from "jsonwebtoken";

export const sigup = async (req, res) => {
  const { nom, email, password } = req.body;

  if (
    !nom &&
    nom.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    res.status(201).json({ message: "You must geting word" });
  }
  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    try {
      const user = await userModel.create({
        nom: req.body.nom,
        email: req.body.email,
        password: hash,
      });
      if (!user) {
        res.status(400).json({ message: "Interval Server Error" });
      } else {
        res.status(201).json({ user, message: "User Added" });
      }
    } catch (err) {
      return new Error(err);
    }
  });
};

export const getUser = async (req, res) => {
  const user = await userModel.find();
  try {
    if (!user) {
      res.status(500).json({ message: "No User Found" });
    } else {
      res.status(201).json({ user, message: "Success" });
    }
  } catch (err) {
    return new Error(err);
  }
};

export const loginuser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  try {
    if (!user) {
      res.status(400).json({ message: "Identity Or Password Incorrect" });
    } else {
      const valid = bcrypt.compare(req.body.password, user.password);
      try {
        if (!valid) {
          res.status(500).json({ message: "Identify or password incorrect" });
        } else {
          res.status(201).json({
            user,
            token:
              "Bearer " +
              jwt.sign({ learnerId: user._id }, "RANDOM_TOKEN_SECRET", {
                expiresIn: "24h",
              }),
            success: true,
            message: "User Found",
          });
        }
      } catch (err) {
        return new Error(err);
      }
    }
  } catch (err) {
    return new Error(err);
  }
};
