import connectMongoDB from "../../../Boite/connexionDB/connectMongoDB";
import { sigup } from "../../../Boite/controllers/userController";

export default async function handler(req, res) {
  await connectMongoDB();
  if (req.method === "POST") {
    return sigup(req, res);
  }
}
