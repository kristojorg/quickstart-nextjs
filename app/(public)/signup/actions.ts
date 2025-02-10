"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp() {
  const cookieStore = await cookies();
  cookieStore.set("flashcards_access_token", crypto.randomUUID());
  redirect("/");
}
