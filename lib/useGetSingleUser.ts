import fetcher from "@/configs/axios";
import type { User } from "./useGetAllUser";

export default async function useGetSingleUser(userId: string) {
  const { data }: { data: User } = await fetcher.get(`/users/${userId}`);
  return data as User;
}
