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
