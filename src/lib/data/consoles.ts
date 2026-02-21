import Controller1 from "$assets/controller/1.svg"
import Controller2 from "$assets/controller/2.svg"
import type { SvgComponent } from "astro/types"

export const supportedConsoles: { name: string, playUrl: string, description: string, imgUrl: SvgComponent, color: string }[] = [
    { name: "NES", playUrl: "/play/nes", description: "a.", imgUrl: Controller1, color: "oklch(58.6% 0.253 17.585)" },
    { name: "SNES", playUrl: "/play/snes", description: "a.", imgUrl: Controller2, color: "oklch(62.7% 0.194 149.214)" }
]