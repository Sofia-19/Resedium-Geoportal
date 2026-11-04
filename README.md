# ReSeDiUm Geoportal

Bilingual static Leaflet Geoportal for Saxony-Anhalt. Raster overlays are loaded from local PMTiles archives; municipality boundaries and statistics are loaded from GeoJSON/JSON.

## Data directory layout

Place the `data` folder beside `index.html`, `app.js`, and `style.css`:

```text
data/
├── pmtiles/
│   ├── Permanent_Grassland.pmtiles
│   ├── Grassland_Conversion.pmtiles
│   ├── NDVI/
│   │   ├── NDVI_2020.pmtiles
│   │   ├── ...
│   │   └── NDVI_2026.pmtiles
│   ├── LULC_class/
│   │   ├── LULC_class_SachsenAnhalt_2020.pmtiles
│   │   └── ... _2025.pmtiles
│   └── Forest_State/
│       ├── Forest_State_2020.pmtiles
│       └── ... _2025.pmtiles
└── statistics/
    ├── crop_diversity.json
    ├── forest_statistics.json
    ├── lclu_statistics.json
    ├── NDVI_municipality_class_statistics_2020_2025.json
    ├── thematic_statistics.json
    └── municipalities.geojson
```

PMTiles must be raster PNG archives with XYZ tile coordinates (the standard PMTiles conversion from XYZ PNG/MBTiles). The web app uses PMTiles JS 4.5.0 via CDN and Leaflet 1.9.4.

## Layers and years

- LULC pixel layer: 2020–2025
- Forest condition pixel layer: 2020–2025
- Median NDVI pixel layer: 2020–2026
- Permanent grassland: single archive
- Grassland conversion (strict GGGCCC): single archive
- Municipality statistics: Gemeinde only; LULC, forest, NDVI by LULC class, crop diversity and thematic indicators.
- NDVI municipality class statistics: 2020–2025, by municipality and LULC class. Region-level NDVI time series is weighted by valid pixel count.

The analytics class selector initially selects agricultural classes 2–14. To focus on a subset, uncheck classes in the dropdown.

## Municipality boundaries and JSON statistics

GeoJSON must be web-ready in EPSG:4326 and contain one feature per Gemeinde. The app reads `data/statistics/municipalities.geojson` and filters features with `properties.Art === "Gemeinde"`.

The NDVI class JSON supports this nested structure:

```json
{
  "1": {
    "municipality_id": "1",
    "municipality_name": "Sachsen-Anhalt",
    "years": {
      "2020": {
        "2": {
          "mean_ndvi": 0.65,
          "pixel_count": 1234
        }
      }
    }
  }
}
```

The app also accepts a flat NDVI statistics array and the older year → municipality nesting for backwards compatibility. For the municipality → years → classes structure, `municipality_id` must match the GeoJSON feature `fid` (NDVI uses the direct `fid`, not the legacy `fid - 1` mapping used by LULC/Forest).

Other statistic files retain the existing portal schema:
- `lclu_statistics.json`: municipality_id, year, class_id, area_ha, area_pct
- `forest_statistics.json`: municipality_id, year, class_id, area_ha, area_pct
- `crop_diversity.json`: municipality_id, year, crop_diversity_n
- `thematic_statistics.json`: municipality_id, permanent_grassland_ha, permanent_grassland_pct, conversion_ha, conversion_pct

## Run locally

From the portal folder:

```bash
npx http-server . -p 8000 --cors
```

The server must support HTTP Range requests for PMTiles. Open `http://localhost:8000`. Do not open `index.html` directly with `file://`; browsers block local JSON and PMTiles fetches in that mode.

## Notes

- Data files are not included in this source ZIP. Copy the `data` folder into the portal root.
- NDVI statistics use standard NDVI units (mean NDVI = stored raster values divided by 100).
- Esri basemap attribution is retained.
