export interface RawJSONCard {
  front: string;
  back: string;
}

export interface RawJSONDeck {
  name: string;
  description: string | null;
  cards: RawJSONCard[];
}
