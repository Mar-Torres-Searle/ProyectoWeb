import Link from "next/link";

export default function Nvbar(){
    return(
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/pokemon'>Lista de Pokemons</Link>
            <Link href='/about'>About</Link>
        </nav>
    );
}