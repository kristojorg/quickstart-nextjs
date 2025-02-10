import { readFile } from "node:fs/promises";

import { RawJSONDeck } from "./model";

export async function getDecks() {
  const rawDecks = JSON.parse(await readFile("./decks.json", "utf-8")) as RawJSONDeck[];
  const decks = rawDecks.map((rawDeck) => ({
    ...rawDeck,
    id: crypto.randomUUID(),
    cards: rawDeck.cards.map((card) => ({
      ...card,
      id: crypto.randomUUID(),
    })),
  }));

  return decks;
}
