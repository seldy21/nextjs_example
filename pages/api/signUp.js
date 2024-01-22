import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function signUp(req, res){
  const client = await connectDB;
  const db = client.db("nextjs-example");

  if (req.method === "POST"){
    const submitData = JSON.parse(req.body)
    const hash = await bcrypt.hash(submitData.password, 10);
    submitData.password = hash;

    let search = await db.collection("users").findOne({id: submitData.id});
    console.log(search);

    if (search) {
      res.status(403).json();
    } else {
      let result = await db.collection("users").insertOne(submitData);
  
      res.redirect(302, '/pages/login');
    }
  }
}