import re
import json
import os

html_content = open('/Users/olalekan/Projects/nims-old/speakers.html', 'r', encoding='utf-8').read()

speakers = []
id_counter = 1

# Let's find all chunks that look like a speaker
# <div ...> <img src="..." .../> </div>
# <div ...> <h6>Name</h6> </div>
# <div ...> <p>Title</p> </div>

# Actually, the format from the earlier grep output:
# <img ... src="./assets/images/pages/speakers/amm.png" ...>
# ...
# <h6 class="elementor-heading-title elementor-size-default">Name</h6>
# ...
# <p class="elementor-heading-title elementor-size-default">Title</p>

# Let's just find all h6 elements, then find the nearest preceding img and nearest succeeding p

# Find all indices of <h6>
h6_matches = list(re.finditer(r'<h6.*?>(.*?)</h6>', html_content, re.IGNORECASE | re.DOTALL))
img_matches = list(re.finditer(r'<img.*?src="(.*?)".*?>', html_content, re.IGNORECASE | re.DOTALL))
p_matches = list(re.finditer(r'<p.*?>(.*?)</p>', html_content, re.IGNORECASE | re.DOTALL))

for h6 in h6_matches:
    name = re.sub(r'<[^>]+>', '', h6.group(1)).strip()
    name = name.replace('&nbsp;', ' ')
    if not name or "About" in name or "Our Vision" in name or "Quick Links" in name:
        continue
        
    pos = h6.start()
    
    # find closest preceding img
    closest_img = None
    for img in reversed(img_matches):
        if img.start() < pos:
            closest_img = img
            break
            
    # find closest succeeding p
    closest_p = None
    for p in p_matches:
        if p.start() > pos:
            # Must be reasonably close
            if p.start() - pos < 500:
                closest_p = p
            break
            
    if closest_img and closest_p:
        img_src = closest_img.group(1)
        if img_src.startswith('./'):
            img_src = img_src[1:]
        img_src = img_src.replace('assets/images', '/images')
        
        title = re.sub(r'<[^>]+>', '', closest_p.group(1)).strip()
        title = title.replace('&nbsp;', ' ')
        
        # Avoid false positives
        if len(name) > 5 and len(title) > 5:
            # Check for duplicates
            if not any(s['name'] == name for s in speakers):
                speakers.append({
                    "id": str(id_counter),
                    "name": name,
                    "role": title,
                    "image": img_src
                })
                id_counter += 1

print(json.dumps(speakers, indent=2))
