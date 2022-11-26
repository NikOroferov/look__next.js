import Link from "next/link";
import MyLink from "../components/MyLink";

export default function Index() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <MyLink href={"/"} text={"Main"} />
          </li>
          <li>
            <MyLink href={"/users"} text={"Users"} />
          </li>
        </ul>
      </nav>
      <h1>Main page</h1>
      <style jsx>
        {`
          .navbar {
            background: gold;
            padding: 15px;
            margin
          }
        `}
      </style>
    </div>
  );
}
