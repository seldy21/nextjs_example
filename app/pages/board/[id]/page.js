import BoardItem from "@/component/BoardItem";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function BoardDetail(props) {
  const client = await connectDB;
  const db = client.db("nextjs-example");

  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
  console.log(result);
  return (
    <>
      <h4>{result.title}</h4>
      <div>{result.content}</div>
    </>
  );
}
