// import { useRouter } from "next/router";
import css from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  // const { query } = useRouter();
  // qury.id
  return (
    <MainContainer keyword={user.name} title={user.name}>
      <div className={css.user__page}>
        <h1>User id: {user.id}</h1>
        <strong className={css.title}>User name: {user.name}</strong>
      </div>
    </MainContainer>
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
