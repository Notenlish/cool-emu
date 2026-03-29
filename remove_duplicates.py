import json

print("removing duplicates in src/data/roms.json")

with open("src/data/roms.json", "r") as f:
    data: list[dict[str, any]] = json.load(f)

objects_to_delete = []

slug_to_index = {}

# I dont fucking know why the popularity_rankings became broken, but adding a "popularity_ranking" attribute and manually sorting it seems to fix it. 

popularity_map = {}
for i, obj in enumerate(data):

    popularity_ranking = None    
    if obj["category"] not in popularity_map:
        popularity_ranking = 0
        popularity_map[obj["category"]] = popularity_ranking
    else:
        popularity_ranking = popularity_map[obj["category"]] + 1 
        popularity_map[obj["category"]] = popularity_ranking
    

    data[i]["popularity_ranking"] = popularity_ranking

    # slug didnt exist before, add slug to slug_to_index
    if slug_to_index.get(obj["slug"], None) is None:
        slug_to_index[obj["slug"]] = 1
    else:
        # duplicate slug, add this to the list for indexes to delete.
        objects_to_delete.append(obj)
    

print(f"removing {len(objects_to_delete)} number of objects")
for o in objects_to_delete:
    data.remove(o)

with open("result.json", "w") as f:
    f.write("[\n")
    for i, obj in enumerate(data):
        f.write(f"{json.dumps(obj)}{',' if i != len(data) - 1 else ''}\n")
    f.write("]")

print("done.")
