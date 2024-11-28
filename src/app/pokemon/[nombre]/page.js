import styles from "../../page.module.css";
import { getpokemons, getPokemon } from "../../utils/httpRequests"

export default async function NombrePage({params}) {
    const {nombre} = params ;
    const pokemons = await getpokemons();
    console.log(pokemons);

    const pokemonSeleccionado = pokemons.find((pokemon) => pokemon.name === nombre);
    console.log(pokemonSeleccionado);
    

    const pokemon = await getPokemon(pokemonSeleccionado.url);
    return (
        <div className={styles.page}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Tipo: {pokemon.types.map((tipo) => tipo.type.name).join(", ")}</p>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>  
            <p>Habilidades: {pokemon.abilities.map((habilidad) => habilidad.ability.name).join(", ")}</p>
        </div>
    )
}