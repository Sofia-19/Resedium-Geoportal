# ReSeDiUm Geoportal — updated layer configuration

Bilingual (German/English) static Leaflet geoportal for Saxony-Anhalt.

## Included in this update

- Existing pixel products: LULC, Forest condition, above-ground biomass and median NDVI.
- Forest-condition year selector now covers **2017–2025**.
- Two additional pixel-level thematic layers:
  - `Permanent_Grassland` — grassland in at least 5 of 6 years (2020–2025), green legend.
  - `Grassland_Conversion` — strict `GGGCCC`: grassland in 2020–2022 followed by cropland in 2023–2025, red legend.
- **No separate Cropland map layers are included.** Crop diversity remains a municipality-level statistic only (count crops with at least 50 ha).
- Multiple layers can be displayed simultaneously; each active layer has a collapsible legend.
- Municipality click panel can display LULC area, permanent-grassland area and percentage, conversion area and percentage, and crop diversity for 2025 when these properties are present in `data/municipalities.geojson`.

## Expected tile folders

Pixel-level XYZ PNG tiles (`{z}/{x}/{y}.png`):

```text
data/tiles/LULC_class_SachsenAnhalt_2020/ ... _2025/
data/tiles/Forest_condition_SachsenAnhalt_2017/ ... _2025/
data/tiles/AGB_density_SachsenAnhalt_2020/ ... _2025/
data/tiles/NDVI_median_SachsenAnhalt_2020/ ... _2025/
data/tiles/Permanent_Grassland/
data/tiles/Grassland_Conversion/
```

The two new thematic tile folder names must match exactly. The app assumes native tile zoom 6–14 and permits visual upscaling to zoom 20. Change `maxNativeZoom` in `app.js` if the tiles were generated to a different maximum zoom.

## Municipality boundaries and statistics

Place a web-ready GeoJSON at `data/municipalities.geojson`, in EPSG:4326. Keep one feature per municipality. Recommended properties:

- `municipality_id`, `AGS`, `RS`, `Name`, `Art`
- `permanent_grassland_ha`, `permanent_grassland_pct`
- `conversion_ha`, `conversion_pct`
- `crop_diversity_2025` (number of crop types with area >= 50 ha)
- optionally `lulc_area_ha`

The browser cannot directly read GeoPackage or Parquet. Export the geometry once as GeoJSON and join the compact municipality statistics to its properties. Example Colab code (run after `municipalities`, `result`, and `crop_diversity` have been created):

```python
import os
import geopandas as gpd
import pandas as pd

# Keep the municipality geometry and stable identifiers.
web = municipalities[[
    "municipality_id", "AGS", "RS", "Name", "Art", "geometry"
]].copy()
web["AGS"] = web["AGS"].astype("string")

# Add Permanent Grassland and strict conversion statistics.
web = web.merge(
    result[[
        "municipality_id",
        "permanent_grassland_ha", "permanent_grassland_pct",
        "conversion_ha", "conversion_pct"
    ]],
    on="municipality_id", how="left", validate="one_to_one"
)

# Add crop diversity for each year; the portal currently displays 2025.
diversity_wide = crop_diversity.pivot(
    index="municipality_id", columns="year", values="crop_diversity_n"
).rename(columns=lambda y: f"crop_diversity_{int(y)}").reset_index()
web = web.merge(
    diversity_wide, on="municipality_id", how="left", validate="one_to_one"
)

# GeoJSON must use WGS84 longitude/latitude.
web = web.to_crs("EPSG:4326")
web.to_file(
    os.path.join(output_dir, "municipalities.geojson"),
    driver="GeoJSON"
)
```

If your existing `municipalities` GeoDataFrame already uses a different municipality identifier or the `result` table has a different schema, adapt the join key and columns before export. Do not join by row order.

## Run locally

From this folder:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. Do not open `index.html` directly with `file://`.

## Notes

- The tile folders and `data/municipalities.geojson` are not bundled in this ZIP. Copy your generated tiles and exported GeoJSON into the indicated folders.
- Municipality-level choropleth tile folders from the previous version remain optional; this update does not generate them.
- Esri basemap attribution is retained in the map.
