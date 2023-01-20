import connectMongoDB from "../../../Boite/connexionDB/connectMongoDB";
import { login } from "../../../Boite/controllers/learnerController";

export default async function handler(req, res) {
  await connectMongoDB();
  if (req.method === "POST") {
    return login(req, res);
  }
}
