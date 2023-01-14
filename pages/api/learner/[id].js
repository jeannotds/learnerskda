import connectMongoDB from "../../../Boite/connexionDB/connectMongoDB";
import {
  deleteLearner,
  getOnLearner,
  putLearner,
} from "../../../Boite/controllers/learnerController";

export default async function handler(req, res) {
  await connectMongoDB();
  if (req.method === "GET") {
    return getOnLearner(req, res);
  }
  if (req.method === "DELETE") {
    return deleteLearner(req, res);
  }
  if (req.method === "PUT") {
    return putLearner(req, res);
  }
}
