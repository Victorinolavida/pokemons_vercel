
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts/Layout'
import { FavoritesPokemons, NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const Favorites = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>()


  useEffect(() => {
  
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  



  return (
    <Layout title='Favorites'>

      {

          favoritePokemons?.length === 0 ? 
          <NoFavorites />:
          
          <FavoritesPokemons pokemons={favoritePokemons ||[]}/>
          

      }

    

    </Layout>
  )
}

export default Favorites;