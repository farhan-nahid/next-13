import fetcher from "@/configs/axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function useGetUserPosts(userId: string) {
  const { data }: { data: Post[] } = await fetcher.get(
    `/posts?userId=${userId}`
  );
  return data as Post[];
}
