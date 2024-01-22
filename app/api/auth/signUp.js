import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;

      let db = (await connectDB).db('nextjs-example');
      await db.collection('users').insertOne(req.body);
      res.status(200).json('성공');
  }
}; 