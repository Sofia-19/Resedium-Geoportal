# Data directory

## Pixel-level XYZ tiles

Place XYZ PNG tile folders under `data/tiles/`:

- `LULC_class_SachsenAnhalt_2020` … `LULC_class_SachsenAnhalt_2025`
- `Forest_condition_SachsenAnhalt_2017` … `Forest_condition_SachsenAnhalt_2025`
- `AGB_density_SachsenAnhalt_2020` … `AGB_density_SachsenAnhalt_2025`
- `NDVI_median_SachsenAnhalt_2020` … `NDVI_median_SachsenAnhalt_2025`
- `Permanent_Grassland`
- `Grassland_Conversion`

The two thematic layers are binary products; the portal uses their generated PNG colors and displays matching legends. **Separate Cropland map layers are intentionally not included.** Crop diversity is retained as a municipality-level statistic (number of crop classes with at least 50 ha).

## Municipality boundaries and click statistics

Place `municipalities.geojson` here, exported in EPSG:4326, with one feature per municipality. Recommended properties:

`municipality_id`, `AGS`, `RS`, `Name`, `Art`, `permanent_grassland_ha`, `permanent_grassland_pct`, `conversion_ha`, `conversion_pct`, `crop_diversity_2025`.

Optionally include `lulc_area_ha`. Geometry is stored once in this GeoJSON, not repeated in every statistics row.

GeoPackage and Parquet are useful analysis formats but are not read directly by this static browser app. Export the joined web layer as GeoJSON. See the root README for a Colab example.
