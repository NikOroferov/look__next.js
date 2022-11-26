// import { useRouter } from "next/router";
import css from "../../styles/user.module.scss";

export default function User({ user }) {
  // const { query } = useRouter();
  return (
    <div>
      <strong className={css.title}>User {user.name}</strong>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await responce.json();

  return {
    props: { user },
  };
}
