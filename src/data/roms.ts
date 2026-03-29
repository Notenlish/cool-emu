import { type CollectionEntry, getCollection } from "astro:content";

let cachedRomGames: CollectionEntry<"romgames">[] | null = null;
let cachedRomGamesOfConsole: Record<string, CollectionEntry<"romgames">[]> = {};

export async function getAllRomGames() {
    if (!cachedRomGames) {
        cachedRomGames = await getCollection("romgames");
    }
    return cachedRomGames;
}

export async function getAllRomGamesOfConsole(console: string) {
    if (console in cachedRomGamesOfConsole) {
        return cachedRomGamesOfConsole[console]
    }
    else {
        let d = await getAllRomGames();
        cachedRomGamesOfConsole[console] = d.filter((e) => (e.data.category == console)).sort((a, b) => (a.data.popularity_ranking - b.data.popularity_ranking));
        return cachedRomGamesOfConsole[console];
    }
}