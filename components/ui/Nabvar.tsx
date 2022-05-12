import { Image, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import React from "react";
// el orignal es Link , pero el de nexUI se llama igual
import NextLink from 'next/link';

export const Nabvar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        alt="Icono aplicacion"
        width={70}
        height={70}
      />

      <NextLink href='/' passHref>
          <Link >
              <Text color="white" h2>P</Text>
              <Text color="white" h3>ókemon</Text>
          </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref >
          <Link >
            <Text color="white">Favoritos</Text>
          </Link>
      </NextLink>

    </div>
  );
};
