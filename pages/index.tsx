
import { Grid } from "@nextui-org/react";
import type { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts/Layout";
import { PokemonCard } from "../components/pokemon/";
import { PokemonsList, ShortPokemons } from "../interfaces";

interface Props {
  pokemons: ShortPokemons[];
}

const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title="Listado de Pókemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// Esta funcion solo se ejecuta en el build time , aunque tambien se ejecuta
// en modo de desarrollo cuando recargamos la página
// esta funcion trabaja del lado del sevidor
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsList>("/pokemon?limit=151");

  const pokemons: ShortPokemons[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
