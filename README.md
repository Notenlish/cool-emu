# Cool Emu 

Cool emulator

I just realized, I need to like actually deploy this project. 
I have 25k loc json and like 20k images. 
I cant upload this to fucking git.

FUUCK.



Also I love how my laptop becomes a jet machine when I'm trying to run npm build at 1 AM. Really appreciate that, Intel Chip.

## build
dont forget to check if the js files of emulator.js are minified. run `npm run build`.

## scraping
cd scraper
scrapy crawl romsgames -o roms.json

you then need to move the roms.json from scraper to src/data/

and also copy over all the public static images from scraper/gameimages/ to public/gameimages/

oh and you need to add the consoles to the getStaticPaths in src/pages/games/[console].astro
why? idk honestly.

note: src/data/roms.json is gitignored bcuz its too big.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |



## Fonts

Fonts are installed locally, discover fonts using [FontSource](https://fontsource.org/).

## Emulatorjs/emulatorjs 

version used is https://github.com/EmulatorJS/EmulatorJS/releases/tag/v4.2.3

I have modified the turkish language pack btw.