import { connectDB } from "@/util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("nextjs-example");

  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <>
      <h2>홈!</h2>
      {/* {result[0].title} */}
    </>
  );
}
