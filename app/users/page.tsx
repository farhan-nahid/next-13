import useGetAllUser, { User } from "@/lib/useGetAllUser";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const data: Promise<User[]> = useGetAllUser();

  const userData = await data;

  const content = (
    <div>
      {userData.map((user) => (
        <div className="mt-5" key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>

          <Link href={`/users/${user.id}`}>View Profile</Link>
        </div>
      ))}
    </div>
  );

  return (
    <section>
      <h1>All Users</h1>
      {content}
    </section>
  );
}
