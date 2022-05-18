import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Nabvar } from "../ui";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const origin = (typeof window === 'undefined')?'':window.location

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {


  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Jose Victorino" />
        <meta name="description" content="Información sobre el pokemon xxxx" />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Informacion sobre ${title}`}/>
        <meta property="og:description" content={`Esta es una página sobre ${title}`} />
        <meta property="og:image" content={`${origin}img/banner.png`}/>
      </Head>

      <Nabvar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
