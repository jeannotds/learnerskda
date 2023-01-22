import connectMongoDB from "../../../Boite/connexionDB/connectMongoDB";
import { getUser } from "../../../Boite/controllers/userController";

export default async function handler(req, res) {
  await connectMongoDB();
  if (req.method === "GET") {
    return getUser(req, res);
  }
}
