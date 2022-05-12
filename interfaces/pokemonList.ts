export interface PokemonsList {
  count: number;
  next?: string;
  previous?: string;
  results: ShortPokemons[];
}

export interface ShortPokemons {
  name: string;
  url: string;
  id: number;
  img: string;
}
