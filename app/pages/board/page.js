import BoardItem from "@/component/BoardItem";
import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Board() {
  const client = await connectDB;
  const db = client.db("nextjs-example");

  let result = await db.collection("post").find().toArray();
  return (
    <>
      <h4>게시판</h4>
      <div><Link href={'/pages/new'}>새 글 작성</Link></div>
      <ul>
        {result.map((item, index) => (
          <BoardItem key={`post_${index}`} item={item} />
        ))}
      </ul>
    </>
  );
}
