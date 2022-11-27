import MyLink from "./MyLink";
import Head from "next/head";
import css from "../styles/index.module.css";

export default function MainContainer({ children, keyword }) {
  return (
    <>
      <Head>
        <meta keyword={keyword}></meta>
        <title>Main page</title>
      </Head>
      <header>
        <nav className={css.navbar}>
          <ul className={css.navbar__list}>
            <li className={css.navbar__item}>
              <MyLink href={"/"} text={"Main"} />
            </li>
            <li className={css.navbar__item}>
              <MyLink href={"/users"} text={"Users"} />
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>{children}</main>
    </>
  );
}
