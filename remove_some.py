import json
import random

print("removing some")

with open("src/data/roms.json", "r") as f:
    data = json.load(f)

prev_category = ""
category_i = 0
for i, obj in enumerate(data):
    if obj["category"] != prev_category:
        prev_category = obj["category"]
        category_i = 0
    else:
        category_i += 1

    if obj["category"] in ("atari-lynx", "atari-2600"):
        data.remove(obj)

deleted = 0
while deleted < 3000:
    rand_i = random.randint(0, len(data))
    obj = data[rand_i]
    if obj["popularity_ranking"] > 200:  # not very popular
        data.remove(obj)
        deleted += 1

with open("result.json", "w") as f:
    f.write("[\n")
    for i, obj in enumerate(data):
        f.write(f"{json.dumps(obj)}{',' if i != len(data) - 1 else ''}\n")
    f.write("]")

print("done.")

