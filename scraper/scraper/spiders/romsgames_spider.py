# response.css("div section div.py-1 div.gap-6 a").get()

from scrapy.http import Response
from pathlib import Path
import scrapy
from slugify import slugify
import requests
import pathlib


class RomsGamesSpider(scrapy.Spider):
    name = "romsgames"

    async def start(self):
        if not pathlib.Path("gameimages").exists():
            pathlib.Path("gameimages").mkdir()

        urls = [
            # if I use just /roms/[console] then results from page 1 get duplicated. The page and sort args need to be kept.
            "https://www.romsgames.net/roms/nintendo/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/super-nintendo/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/gameboy/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/gameboy-advance/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/nintendo-ds/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/atari-5200-supersystem/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/playstation/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/atari-jaguar/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/atari-lynx/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/sega-saturn/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/nintendo-64/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/atari-2600/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/amiga-500/?page=1&sort=popularity",
            "https://www.romsgames.net/roms/playstation-portable/?page=1&sort=popularity",
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response: Response):
        # sega-saturn
        category = f"{response.url}".replace(
            "https://www.romsgames.net/roms/", ""
        ).split("/")[0]  # sega-saturn

        response.css("a::attr(href)")
        for elem in response.css("div section div.py-1 div.gap-6 a"):
            imgUrl = elem.css("img::attr(src)").get()
            if type(imgUrl) != str:
                raise Exception(f"imgpath not string {imgUrl}")
            if imgUrl.startswith("/"):
                imgUrl = f"https://www.romsgames.net{imgUrl}"
                if imgUrl == "https://www.romsgames.net/image/no-cover.png":
                    imgUrl = ""

            imgPath = ""
            if imgUrl.startswith("https://"):
                a = imgUrl.removeprefix("https://")
                p = pathlib.Path("gameimages" + a[a.index("/") :])

                if not p.exists():
                    p.parent.mkdir(parents=True, exist_ok=True)
                    img = requests.get(imgUrl)

                    with open(
                        p,
                        "wb",
                    ) as f:
                        f.write(img.content)
                else:  # file exists already so dont try to download it.
                    pass
                imgPath = p.as_posix()
            elif imgUrl == "":
                imgPath = ""

            name = "".join(elem.css("div.text-sm::text").getall()).strip()
            yield {
                "href": response.urljoin(elem.attrib.get("href")),
                "name": name,
                "imgPath": imgPath,
                "imgUrl": imgUrl,
                "category": category,
                "slug": slugify(category) + "-rom-" + slugify(name),
            }

        for link in response.css("nav[aria-label] ul li a"):
            next_url = response.urljoin(link.attrib.get("href"))
            yield scrapy.Request(next_url, callback=self.parse)
