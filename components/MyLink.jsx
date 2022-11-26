import Link from "next/link";
import css from "../styles/MyLink.module.css";

export default function MyLink({ text, href }) {
  return (
    <Link href={href} legacyBehavior>
      <a className={css.link}>{text}</a>
    </Link>
  );
}
