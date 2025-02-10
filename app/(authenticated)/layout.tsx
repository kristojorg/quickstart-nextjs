import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("flashcards_access_token")?.value;
  if (!accessToken) {
    redirect("/signup");
  }

  return (
    <div className="[grid-template-areas:'header''body'] grid h-screen grid-rows-[auto_1fr] overflow-hidden">
      {children}
    </div>
  );
}
