# Cool Emu 

Cool emulator

I just realized, I need to like actually deploy this project. 
I have 25k loc json and like 20k images. 
I cant upload this to fucking git.

FUUCK.

Also I love how my laptop becomes a jet machine when I'm trying to run npm build at 1 AM. Really appreciate that, Intel Chip.

## Deployment

Do not actually think you can deploy this like a normal person. I am doing deployments manually because I am a maniac and don't want to connect R2 and some other stupidly named cloudflare service to store my assets.

To deploy you need to scrape the files yourself and then create a cloudflare pages deployment. Then, go to cloudflare dashboard, create an pages project and use wrangler to upload the files because Cloudflare doesn't like it when you upload more than 1000+ files using the webpage.

run this:
`wrangler login`

then do: `wrangler pages deploy dist`

DON'T try to deploy to my project though, so you need to update wrangler.jsonc so that its your project instead.

you either need to create a new project or use an existing project that you own.

Uploading files takes an INSANELY long time.


## Build
dont forget to check if the js files of emulator.js are minified. run `npm run build`.

## Scraping
cd scraper
scrapy crawl romsgames -o roms.json

you then need to move the roms.json from scraper to src/data/

and also copy over all the public static images from scraper/gameimages/ to public/gameimages/

oh and you need to add the consoles to the getStaticPaths in src/pages/games/[console].astro
why? idk honestly.

note: src/data/roms.json is gitignored bcuz its too big.

## Dev Server
`npm run dev`

if you have scraped all the possible games then npm run dev will take a really long time(like a minute or more) to start. That's normal.

Don't ask me what's the fix for it. I do not know.

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