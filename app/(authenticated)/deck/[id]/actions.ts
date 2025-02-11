"use server";

import { revalidatePath } from "next/cache";
import { readFile, writeFile } from "node:fs/promises";
import { Deck } from "@/lib/models";

export async function updateDeck(formData: FormData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const description = formData.get("description");

  if (
    typeof id !== "string" ||
    typeof name !== "string" ||
    typeof description !== "string"
  ) {
    return;
  }

  const decks = JSON.parse(await readFile("./decks.json", "utf-8")) as Deck[];

  const index = decks.findIndex((deck) => deck.id === id);
  if (index === -1) {
    return;
  }

  decks[index].name = name ?? decks[index].name;
  decks[index].description = description ?? decks[index].description;

  await writeFile("./decks.json", JSON.stringify(decks, null, 2));
}

export async function addCard(formData: FormData) {
  const deckId = formData.get("deckId");
  const front = formData.get("front");
  const back = formData.get("back");

  console.log({ formData, deckId, front, back });

  if (
    typeof deckId !== "string" ||
    typeof front !== "string" ||
    typeof back !== "string"
  ) {
    return;
  }

  const decks = JSON.parse(await readFile("./decks.json", "utf-8")) as Deck[];

  const deck = decks.find((deck) => deck.id === deckId);
  if (!deck) {
    return;
  }

  deck.cards.push({ front, back, id: crypto.randomUUID() });
  await writeFile("./decks.json", JSON.stringify(decks, null, 2));
  revalidatePath(`/deck/${deckId}`);
}
