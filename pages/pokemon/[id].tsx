import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces/pokemon";
import { Button, Card, Container, Grid, Text, Image} from "@nextui-org/react";
import { localFavorites } from "../../utils";

interface Pops {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Pops> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorite =()=>{
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)
  }

  return (
    <Layout title={pokemon.name}>
        <Grid.Container css={{marginTop:'5px'}} gap={2}>
            <Grid xs={12} sm={4}>
              <Card hoverable css={{padding:'30px'}}>
                  <Card.Body>
                    <Card.Image 
                    src={pokemon.sprites.other?.dream_world.front_default || ''}
                    alt={pokemon.name}
                    height={200}
                    width='100%'
                    />
                  </Card.Body>
              </Card>
            </Grid>
            <Grid xs={12} sm={8}>
              <Card>

                <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                  <Text h1 transform="capitalize" >{pokemon.name}</Text>
                  <Button 
                  onClick={onToggleFavorite}
                  color='gradient'
                  ghost = {!isInFavorites}
                  >
                    { !isInFavorites ? 'Guardar en Favoritos' : 'En Favoritos' }
                  </Button>
                </Card.Header>
                <Card.Body>
                  <Text size={30}>Sprites:</Text>
                  <Container direction="row" display="flex">
                    <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    />
                      <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    />
                      <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    />
                      <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                    />
                  </Container>
                </Card.Body>
              </Card>
            </Grid>
        </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemos151 = [...Array(151)].map((el, index) => `${index + 1}`);

  return {
    paths: pokemos151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  const pokemon={
    id:data.id,
    name:data.name,
    sprites: data.sprites
  }

  return {
    props: {
      pokemon
    },
  };
};

export default PokemonPage;
export {};
