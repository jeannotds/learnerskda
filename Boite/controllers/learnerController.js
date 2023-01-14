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
      res.status(200).json({ learners, message: "Successfull" });
    }
  } catch (err) {
    return new Error(err);
  }
};
