import connectMongoDB from "../../../Boite/connexionDB/connectMongoDB";
import { getOnLearner } from "../../../Boite/controllers/learnerController";

export default async function handler(req, res) {
  await connectMongoDB();
    if (req.method === "GET") {
      return getOnLearner(req, res);
    }
}