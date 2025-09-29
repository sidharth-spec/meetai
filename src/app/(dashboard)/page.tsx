import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { HomeView } from "@/modules/home/ui/views/home-views";
const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/sign-in");
  }
  return <HomeView />;
};
export default Page;
