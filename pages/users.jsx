import MainContainer from "../components/MainContainer";
import MyLink from "../components/MyLink";

export default function Users({ users }) {
  return (
    <MainContainer keyword="users list" title="Users list">
      <h1>Users list</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <MyLink href={`/users/${user.id}`} text={user.name} />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
}

export async function getStaticProps(context) {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await responce.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
