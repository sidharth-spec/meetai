import { SignUpViews } from "@/modules/auth/ui/views/sign-up-views";
import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!!session) {
    redirect("/");
  }
  return <SignUpViews />;
};

export default page;
