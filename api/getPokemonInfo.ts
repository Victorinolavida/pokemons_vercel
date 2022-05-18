import { Pokemon } from "../interfaces/pokemon";
import pokeApi from "./pokeApi";


export const getPokemonInfo = async(id:string) => {
  try {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

     return {
      id:data.id,
      name:data.name,
      sprites: data.sprites
    }
  
    
  } catch (error) {
   return null
  }
}


export const getPokemonInfoByName=async(name:string)=>{
  try {
      const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name.toLocaleLowerCase()}`);

     return {
        id:data.id,
        name:data.name,
        sprites: data.sprites
      }
    
  } catch (error) {
    return null
  }
}