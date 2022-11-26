import { useEffect, useState } from "react";
import axios from "axios";
import MyLink from "../components/MyLink";

export default function Users({ users }) {
  return (
    <div>
      <h1>Users list</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <MyLink href={`/users/${user.id}`} text={user.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await responce.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
