import Image from "next/image";
import styles from "./page.module.css";
import RandomPokemon from "../components/RandomPokemon";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/pokemon.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <RandomPokemon></RandomPokemon>
        
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
