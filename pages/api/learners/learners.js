import connectMongoDB from "../../../Boite/connexionDB/connectMongoDB";
import {
  getLearners,
  postLearner,
} from "../../../Boite/controllers/learnerController";

export default async function handler(req, res) {
  await connectMongoDB();
  if (req.method === "GET") {
    return getLearners(req, res);
  }
  if (req.method === "POST") {
    return postLearner(req, res);
  }
}
