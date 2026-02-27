import Controller1 from "$assets/controller/1.svg"
import Controller2 from "$assets/controller/2.svg"
import Controller3 from "$assets/controller/3.svg"
import Controller4 from "$assets/controller/4.svg"
import type { SvgComponent } from "astro/types"

export const supportedConsoles: { name: string, playUrl: string, description: string, imgUrl: SvgComponent, color: string, cssClass: string }[] = [
    { name: "NES", playUrl: "/play/nes", description: "a.", imgUrl: Controller1, color: "oklch(58.6% 0.253 17.585)", cssClass: "col-span-2" },
    { name: "SNES", playUrl: "/play/snes", description: "a.", imgUrl: Controller2, color: "oklch(62.7% 0.194 149.214)", cssClass: "col-span-2" },
    { name: "Gameboy", playUrl: "/play/gameboy", description: "gameboy.", imgUrl: Controller3, color: "#94c138", cssClass: "col-span-1 row-span-2" },
    { name: "Playstation", playUrl: "/play/playstation", description: "playstation.", imgUrl: Controller4, color: "oklch(54.6% 0.245 262.881)", cssClass: "col-span-3 row-span-1 row-start-3 col-start-2" }
]