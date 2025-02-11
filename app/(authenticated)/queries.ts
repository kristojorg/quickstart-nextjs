import { readFile } from "node:fs/promises";

import { Deck } from "@/lib/models";

export async function getDecks() {
  const decks = JSON.parse(await readFile("./decks.json", "utf-8")) as Deck[];

  return decks;
}
