"use client";
import { useRouter } from "next/navigation";
import { getRandomPokemon } from "../app/utils/httpRequests";

export default function RandomPokemon(){
    const router = useRouter();
    const handleRandomPokemon = async () => {
      const randomPokemon = await getRandomPokemon();
      router.push(`/pokemon/${randomPokemon.name}`);
    }
    return(
        <button onClick={handleRandomPokemon}>Obtener Pokemon Random</button>
    );
}