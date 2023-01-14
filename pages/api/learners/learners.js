import connectMongoDB from "../../../Boite/connexionDB/connectMongoDB";
import { getLearners } from "../../../Boite/controllers/learnerController";

export default async function handler(req, res) {
  await connectMongoDB();
  if (req.method === "GET") {
    return getLearners(req, res);
  }
}
