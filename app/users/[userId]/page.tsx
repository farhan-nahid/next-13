import { User } from "@/lib/useGetAllUser";
import useGetSingleUser from "@/lib/useGetSingleUser";
import useGetUserPosts, { Post } from "@/lib/useGetUserPosts";
import { Suspense } from "react";

interface Params {
  params: {
    userId: string;
  };
}

export async function generateMetadata({ params: { userId } }: Params) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user: Promise<User> = useGetSingleUser(userId);
  const userData = await user;

  return {
    title: userData.name,
  };
}

export default async function UserDetails({ params: { userId } }: Params) {
  const user: Promise<User> = useGetSingleUser(userId);
  const posts: Promise<Post[]> = useGetUserPosts(userId);

  const userData = await user;
  const postData = await posts;

  return (
    <div>
      <h1>{userData.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {postData.map((post) => (
          <div className="mt-5" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </Suspense>
    </div>
  );
}
