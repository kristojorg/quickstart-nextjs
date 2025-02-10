"use server";

import { readFile, writeFile } from "node:fs/promises";
import { revalidatePath } from "next/cache";
import { RawJSONDeck } from "./model";

export async function importDeck(formData: FormData) {
  const file = formData.get("file") as File;
  const deck = JSON.parse(await file.text()) as RawJSONDeck;
  const existingDecks = JSON.parse(
    await readFile("./decks.json", "utf-8")
  ) as RawJSONDeck[];

  await writeFile(
    "./decks.json",
    JSON.stringify([...existingDecks, deck], null, 2)
  );

  revalidatePath("/");
}
