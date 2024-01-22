import BoardItem from "@/component/BoardItem";
import { connectDB } from "@/util/database";

export default async function Board() {
  const client = await connectDB;
  const db = client.db("nextjs-example");

  let result = await db.collection("post").find().toArray();
  console.log(result);
  return (
    <>
      <h4>게시판</h4>
      <ul>
        {result.map((item, index) => (
          <BoardItem key={`post_${index}`} item={item} />
        ))}
      </ul>
    </>
  );
}
