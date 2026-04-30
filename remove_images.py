import json
import os

print("removing some")

with open("src/data/roms.json", "r") as f:
    data = json.load(f)

local_path_set: set[str] = set()
for o in data:
    path = o["imgPath"].lstrip("/")
    p = os.path.normpath(path).replace("\\", "/")
    local_path_set.add(p)

base_dir = os.path.normpath("public/gameimages/static")

deleted_files = 0

for root, dirs, files in os.walk(base_dir):
    for file in files:
        full_path = os.path.join(root, file)
        rel_path = os.path.normpath(full_path).replace("\\", "/")

        # relative to project root
        rel_path = rel_path.replace("\\", "/").replace("public/","")

        if rel_path not in local_path_set:
            # print("Deleting:", rel_path)
            os.remove(full_path)
            deleted_files += 1

print(f"Deleted {deleted_files} files")
