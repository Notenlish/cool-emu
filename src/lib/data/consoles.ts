import Controller1 from "$assets/controller/1.svg"
import Controller2 from "$assets/controller/2.svg"
import Controller3 from "$assets/controller/3.svg"
import Controller4 from "$assets/controller/4.svg"
import type { SvgComponent } from "astro/types"


export const supportedConsoles: { alternativeId: string, id: string, name: string, playUrl: string, description: string, imgUrl: SvgComponent, color: string, cssClass: string }[] = [
    { alternativeId: "nintendo", id: "nes", name: "NES", playUrl: "/play/nes", description: "a.", imgUrl: Controller1, color: "oklch(58.6% 0.253 17.585)", cssClass: "col-span-2" },
    { alternativeId: "super-nintendo", id: "snes", name: "SNES", playUrl: "/play/snes", description: "a.", imgUrl: Controller2, color: "oklch(62.7% 0.194 149.214)", cssClass: "col-span-2" },
    { alternativeId: "nintendo", id: "gameboy", name: "Gameboy", playUrl: "/play/gameboy", description: "gameboy.", imgUrl: Controller3, color: "#94c138", cssClass: "col-span-1 row-span-2" },
    { alternativeId: "playstation", id: "ps", name: "Playstation", playUrl: "/play/playstation", description: "playstation.", imgUrl: Controller4, color: "oklch(54.6% 0.245 262.881)", cssClass: "col-span-3 row-span-1 row-start-3 col-start-2" },
    { alternativeId: "sega-saturn", id: "sega-saturn", name: "Sega Saturn", playUrl: "/play/sega-saturn", description: "description for sega saturn.", imgUrl: Controller4, color: "oklch(51.1% 0.262 276.966)", cssClass: "col-span-3 row-span-1 row-start-3 col-start-2" }
]

import { type CollectionEntry, getCollection } from "astro:content";
type RomGame = CollectionEntry<"romgames">;

export async function getGamesOfAllConsolesAsEntries() {
    const allRomGames = await getCollection("romgames");

    type RomGame = CollectionEntry<"romgames">;
    type GenericDict<K extends string, V> = Record<K, V>;
    let romGamesByConsoles: GenericDict<string, Array<RomGame>> = {};

    for (const rg of allRomGames) {
        if (romGamesByConsoles[rg.data.category] == undefined) {
            romGamesByConsoles[rg.data.category] = [];
        }
        romGamesByConsoles[rg.data.category].push(rg);
    }

    const romGamesToMap = Object.entries(romGamesByConsoles);

    return romGamesToMap;
}

export async function getGamesOfConsoleAsEntries(consoleCategory: string) {
    const AllRomGamesEntries = getGamesOfAllConsolesAsEntries();

    const games = (await AllRomGamesEntries).find((e) => e[0] == consoleCategory)
    return games;
}