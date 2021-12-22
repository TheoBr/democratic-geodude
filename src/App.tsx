import styles from "./App.module.css";

import type { Component } from "solid-js";
import { createTrpcQuery } from "./lib/trpc";

const ComponentWithData: Component = () => {
  const [data] = createTrpcQuery("get-pokemon-pair");

  return <h2>{data()?.firstPokemon.id ?? "Loading..."}</h2>;
};

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <ComponentWithData />
        <p>
          The content above is loaded from a tRPC endpoint hosted via a Vercel
          serverless function
        </p>
        <a href="https://github.com/TheoBr/solid-trpc" class={styles.link}>
          Github Repo
        </a>
      </header>
    </div>
  );
};

export default App;
