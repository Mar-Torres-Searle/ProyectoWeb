import styles from "../page.module.css";
import { getpokemons } from "../utils/httpRequests"
import Link from "next/link"
export default async function ListaPokemons() {
    const pokemons = await getpokemons()
    return (
        <div className={styles.page}>
            <h2>Pokemons</h2>
            {pokemons.map((pokemon) => (
                <div key={pokemon.name}>
                    <Link href={`/pokemon/${pokemon.name}`}> 
                        <h3>{pokemon.name}</h3>  
                    </Link>
                </div>
            ))}
        </div>
    );
  }