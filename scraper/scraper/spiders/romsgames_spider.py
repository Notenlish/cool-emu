# response.css("div section div.py-1 div.gap-6 a").get()

from scrapy.http import Response
from pathlib import Path
import scrapy
from slugify import slugify


class RomsGamesSpider(scrapy.Spider):
    name = "romsgames"

    async def start(self):
        urls = [
            "https://www.romsgames.net/roms/sega-saturn/?page=1&sort=popularity",  # if I use just /roms/sega-saturn then results from page 1 get duplicated.
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response: Response):
        print("woohoo", response.url)

        # sega-saturn
        category = f"{response.url}".replace(
            "https://www.romsgames.net/roms/", ""
        ).split("/")[0]  # sega-saturn

        response.css("a::attr(href)")
        for elem in response.css("div section div.py-1 div.gap-6 a"):
            imgpath = elem.css("img::attr(src)").get()
            if type(imgpath) != str:
                raise Exception(f"imgpath not string {imgpath}")
            if imgpath.startswith("/"):
                imgpath = f"https://www.romsgames.net{imgpath}"
                if imgpath == "https://www.romsgames.net/image/no-cover.png":
                    imgpath = ""

            name = "".join(elem.css("div.text-sm::text").getall()).strip()
            yield {
                "href": response.urljoin(elem.attrib.get("href")),
                "name": name,
                "imgPath": imgpath,
                "category": category,
                "slug": slugify(category) + "-rom-" + slugify(name),
            }

        for link in response.css("nav[aria-label] ul li a"):
            next_url = response.urljoin(link.attrib.get("href"))
            yield scrapy.Request(next_url, callback=self.parse)
