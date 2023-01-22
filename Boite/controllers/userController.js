import userModel from "../models/userModel";

export const sigup = async (req, res) => {
  const { nom, email, password } = req.body;

  try {
    const user = await userModel.create(req.body);
    if (!user) {
      res.status(400).json({ message: "Interval Server Error" });
    } else {
      res.status(201).json({ user, message: "User Added" });
    }
  } catch (err) {
    return new Error(err);
  }
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
      res.status(400).json({ message: "Identity or Password Incorrect" });
    } else {
      res.status(201).json({ user, message: "User Found" });
    }
  } catch (err) {
    return new Error(err);
  }
};
