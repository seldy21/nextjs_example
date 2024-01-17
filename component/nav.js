import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="d-flex gap-2">
        <Link href={`/pages/home`}>홈</Link>
        <Link href={`/pages/login`}>로그인</Link>
        <Link href={`/pages/board`}>게시판</Link>
      </div>
    </>
  );
}
