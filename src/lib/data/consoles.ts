import Controller1 from "$assets/controller/1.svg"
import Controller2 from "$assets/controller/2.svg"
import Controller3 from "$assets/controller/3.svg"
import Controller4 from "$assets/controller/4.svg"
import type { SvgComponent } from "astro/types"


// TODO: support more consoles?
export const supportedConsoles: { alternativeId: string, id: string, name: string, playUrl: string, description: string, imgUrl: SvgComponent | string, color: string, cssClass: string }[] = [
    { alternativeId: "nintendo-64", id: "nintendo-64", name: "Nintendo 64", playUrl: "/play/nintendo-64", description: "a.", imgUrl: Controller1, color: "oklch(58.6% 0.253 17.585)", cssClass: "col-span-2" },
    { alternativeId: "nintendo-ds", id: "nintendo-ds", name: "Nintendo DS", playUrl: "/play/nintendo-ds", description: "a.", imgUrl: Controller1, color: "oklch(58.6% 0.253 17.585)", cssClass: "col-span-2" },
    { alternativeId: "nintendo", id: "nintendo", name: "NES", playUrl: "/play/nes", description: "a.", imgUrl: Controller1, color: "oklch(58.6% 0.253 17.585)", cssClass: "col-span-2" },
    { alternativeId: "super-nintendo", id: "super-nintendo", name: "SNES", playUrl: "/play/snes", description: "a.", imgUrl: Controller2, color: "oklch(62.7% 0.194 149.214)", cssClass: "col-span-2" },
    { alternativeId: "gameboy", id: "gameboy", name: "Gameboy", playUrl: "/play/gameboy", description: "gameboy.", imgUrl: Controller3, color: "#94c138", cssClass: "col-span-1 row-span-2" },
    { alternativeId: "gameboy-advance", id: "gameboy-advance", name: "Gameboy Advance", playUrl: "/play/gameboy-advance", description: "gameboy advance.", imgUrl: Controller3, color: "#94c138", cssClass: "col-span-1 row-span-2" },
    { alternativeId: "playstation", id: "playstation", name: "Playstation", playUrl: "/play/playstation", description: "playstation.", imgUrl: Controller4, color: "oklch(54.6% 0.245 262.881)", cssClass: "col-span-3 row-span-1 row-start-3 col-start-2" },
    { alternativeId: "playstation-portable", id: "playstation-portable", name: "Playstation Portable (PSP)", playUrl: "/play/playstation-portable", description: "playstation portable.", imgUrl: Controller4, color: "oklch(68.5% 0.169 237.323)", cssClass: "col-span-3 row-span-1 row-start-3 col-start-2" },
    { alternativeId: "sega-saturn", id: "sega-saturn", name: "Sega Saturn", playUrl: "/play/sega-saturn", description: "description for sega saturn.", imgUrl: Controller4, color: "oklch(51.1% 0.262 276.966)", cssClass: "col-span-3 row-span-1 row-start-3 col-start-2" },
    // { alternativeId: "atari-5200-supersystem", id: "atari-5200-supersystem", name: "Atari 5200 Supersystem", playUrl: "/play/atari-5200", description: "", imgUrl: Controller4, color: "oklch(51.1% 0.262 276.966)", cssClass: "" },
    // { alternativeId: "atari-2600", id: "atari-2600", name: "Atari 2600", playUrl: "/play/atari-2600", description: "", imgUrl: Controller4, color: "oklch(51.1% 0.262 276.966)", cssClass: "" },
    // { alternativeId: "amiga-500", id: "amiga-500", name: "Amiga 500", playUrl: "/play/amiga-500", description: "", imgUrl: Controller4, color: "oklch(51.1% 0.262 276.966)", cssClass: "" },
    { alternativeId: "atari-jaguar", id: "atari-jaguar", name: "Atari Jaguar", playUrl: "/play/atari-jaguar", description: "", imgUrl: Controller4, color: "oklch(51.1% 0.262 276.966)", cssClass: "" },
    // { alternativeId: "atari-lynx", id: "atari-lynx", name: "Atari Lynx", playUrl: "/play/atari-lynx", description: "", imgUrl: Controller4, color: "oklch(51.1% 0.262 276.966)", cssClass: "" },
]

import { getAllRomGames, getAllRomGamesOfConsole } from "src/data/roms"
import { type CollectionEntry } from "astro:content";

type RomGame = CollectionEntry<"romgames">;

// TODO: Maybe this would be faster if I used the getAllRomGamesOfConsole() function from src/data/roms
export async function getGamesOfAllConsolesAsEntries() {
    // const allRomGames = await getAllRomGames();

    const result: Record<string, CollectionEntry<"romgames">> = {}
    for (const console_obj of supportedConsoles.values()) {
        result[console_obj.id] = await getAllRomGamesOfConsole(console_obj.id);
    }
    return result;

    // type RomGame = CollectionEntry<"romgames">;
    // type GenericDict<K extends string, V> = Record<K, V>;
    // let romGamesByConsoles: GenericDict<string, Array<RomGame>> = {};

    // for (const rg of allRomGames) {
    //     if (romGamesByConsoles[rg.data.category] == undefined) {
    //         romGamesByConsoles[rg.data.category] = [];
    //     }
    //     romGamesByConsoles[rg.data.category].push(rg);
    // }

    // const romGamesToMap = Object.entries(romGamesByConsoles);

    // return romGamesToMap;
}

// export async function getGamesOfConsoleAsEntries(consoleCategory: string) {
//     const AllRomGamesEntries = getGamesOfAllConsolesAsEntries();

//     const games = (await AllRomGamesEntries).find((e) => e[0] == consoleCategory)
//     return games;
// }