import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
  id:number
}

export const FavoriteCardPokemon= ({id}:Props)=> {
  const router = useRouter();

  const onClick = ()=>{
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
    <Card hoverable clickable css={{padding:10}} onClick={onClick}>
      <Card.Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` }
        height={140}
      />

    </Card>
</Grid>
  )
}
