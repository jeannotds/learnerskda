import connectMongoDB from "../../../Boite/connexionDB/connectMongoDB";
import { loginuser } from "../../../Boite/controllers/userController";

export default async function handler(req, res) {
  await connectMongoDB();
  if (req.method === "POST") {
    return loginuser(req, res);
  }
}

// export default async function handler(req, res) {
//   await connectMongoDB();
//   if (req.method === "POST") {
//     return login(req, res);
//   }
// }