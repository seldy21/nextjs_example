import { connectDB } from "@/util/database";

export default async function NewPost() {
  const client = await connectDB;
  const db = client.db("nextjs-example");

  return (
    <form method="POST" action="/api/test">
      <h5 className="fw-bold">글제목</h5>
      <input type="text" name="title" />

      <h5 className="fw-bold">내용</h5>
      <textarea name="content"></textarea>
      <div>
        <button type="submit">올리기</button>
      </div>
    </form>
  );
}
