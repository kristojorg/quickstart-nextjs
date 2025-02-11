"use server";

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
