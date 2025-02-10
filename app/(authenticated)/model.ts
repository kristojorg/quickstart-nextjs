export interface RawJSONDeck {
  name: string;
  description: string | null;
  cards: {
    front: string;
    back: string;
  }[];
}

