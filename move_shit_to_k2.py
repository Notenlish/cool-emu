import json

with open("src/data/roms.json", "r") as f:
    data = json.load(f)

for obj in data:
    pass
    # example data
    # { "href": "https://www.romsgames.net/nintendo-rom-bubble-bobble/", 
    #   "name": "Bubble Bobble",
    #   "imgPath": "gameimages/static/ea628bd4fde09fb984a3cba61902c824d00e5d58/image.jpeg",
    #   "imgUrl": "https://cache.downloadroms.io/static/ea628bd4fde09fb984a3cba61902c824d00e5d58/image.jpeg",
    #   "category": "nintendo",
    #   "slug": "nintendo-rom-bubble-bobble",
    #   "popularity_ranking": 32
    # }


# I dont want to be billed for this stupid little website
# I dont want to risk getting DDOS'd

# I'm going to try to get cloudflare pages to work.

# great there are 6 high and 4 moderate vulnerabilities.

