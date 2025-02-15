import { readFile } from "node:fs/promises";

import { Deck } from "@/lib/models";

export async function getDeck({ id }: { id: string }) {
  const deck = JSON.parse(await readFile("./decks.json", "utf-8")) as Deck[];

  return deck.find((deck) => deck.id === id) ?? null;
}
