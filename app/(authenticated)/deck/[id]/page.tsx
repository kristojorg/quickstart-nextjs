import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { PageContainer } from "@/components/page-container";

import { updateDeck } from "./actions";
import { getDeck } from "./queries";

export default async function DeckPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("flashcards_access_token")?.value;
  if (!accessToken) {
    redirect("/signup");
  }

  const deck = await getDeck({ id });

  if (!deck) {
    notFound();
  }

  return (
    <>
      <Header pageTitle={deck.name} actions={null} />
      <PageContainer>
        <form action={updateDeck} className="space-y-4 mb-4">
          <input type="hidden" name="id" value={deck.id} />
          <div className="space-y-2">
            <Input
              type="text"
              name="name"
              defaultValue={deck.name}
              className="text-3xl font-bold focus-visible:ring-0"
            />
            <Textarea
              name="description"
              defaultValue={deck.description ?? ""}
              rows={3}
              placeholder="Add a description..."
              className="resize-none bg-muted/40"
            />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {deck.cards.map((card) => (
            <Card key={card.id}>
              <CardContent className="p-6 space-y-4">
                <p>{card.front}</p>
                <Separator />
                <p className="text-sm text-muted-foreground">{card.back}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
