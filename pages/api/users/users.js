import connectMongoDB from "../../../Boite/connexionDB/connectMongoDB";
import { postUser } from "../../../Boite/controllers/userController";

export default async function handler(req, res) {
  await connectMongoDB();
  if (req.method === "POST") {
    return postUser(req, res);
  }
}
