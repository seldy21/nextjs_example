import Link from "next/link";

export default function BoardItem(props) {
  const { item } = props;
  return <li><Link href={`/pages/board/${item._id}`}>{item.title}</Link></li>;
}
