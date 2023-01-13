// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongoDB from "../../Boite/connexionDB/connectMongoDB";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
  connectMongoDB();
}
