"use server";

import { readFile, writeFile } from "node:fs/promises";
import { revalidatePath } from "next/cache";
import { RawJSONDeck, Deck } from "@/lib/models";

export async function importDeck(formData: FormData) {
  const file = formData.get("file") as File;
  const rawDeck = JSON.parse(await file.text()) as RawJSONDeck;
  const deck: Deck = {
    ...rawDeck,
    id: crypto.randomUUID(),
    cards: rawDeck.cards.map((card) => ({
      ...card,
      id: crypto.randomUUID(),
    })),
  };

  const existingDecks = JSON.parse(
    await readFile("./decks.json", "utf-8")
  ) as Deck[];

  await writeFile(
    "./decks.json",
    JSON.stringify([...existingDecks, deck], null, 2)
  );

  revalidatePath("/");
}
