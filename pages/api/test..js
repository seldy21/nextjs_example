import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("nextjs-example");

  let result = await db.collection("post").find().toArray();

  if (req.method == "GET") {
    res.status(200).json(result);
  }
  if (req.method == "POST") {
    const date = new Date();

    try {
      const postResult = await db.collection("post").insertOne({
        title: req.body.title,
        content: req.body.content,
        created_at: date,
      });

      res.redirect(302, "/pages/board");
    } catch (err) {
      console.log(err);
    }
  }
}
