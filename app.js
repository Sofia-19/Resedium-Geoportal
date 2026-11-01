const CLASS_NAMES = {
  1:'Artificial',2:'Wheat',3:'Rapeseed',4:'Maize',5:'Sugar beet',6:'Sunflower',7:'Oats',8:'Barley',9:'Rye',10:'Triticale',
  11:'Potato',12:'Legumes',13:'Forage mixtures',14:'Other crops',15:'Grassland',16:'Trees',17:'Forest',18:'Damaged Forest',19:'Bareland',20:'Water'
};
const COLORS = {
  1:'#ff0900',2:'#acff00',3:'#b03434',4:'#8657ff',5:'#35e7ff',
  6:'#ffff00',7:'#009ccc',8:'#ecc1b3',9:'#ff6700',10:'#686d8d',
  11:'#8326c1',12:'#cc8e46',13:'#6e7c00',14:'#d2cdba',15:'#69e000',
  16:'#00c000',17:'#005500',18:'#000000',19:'#b06a00',20:'#004cff'
};
const FOREST_CLASSES = [
  {id:1, name:'Health', color:'#19932b', de:'Gesund'},
  {id:2, name:'Burned', color:'#ff0000', de:'Verbrannt'},
  {id:3, name:'Bareland (Beetle Damage)', color:'#ff9e0a', de:'Kahlfläche (Borkenkäferschäden)'},
  {id:4, name:'Dead Trees (Beetle Damage)', color:'#4c4c39', de:'Abgestorbene Bäume (Borkenkäferschäden)'},
  {id:5, name:'Logged', color:'#ffff00', de:'Abgeholzt'},
  {id:7, name:'Recovering / sparsely wooded', color:'#dfffb6', de:'In Erholung / licht bewaldet'}
];

const I18N = {
  de: {
    projectTitle:'Satelliten- und Sprachdaten für die Analyse nutzbarer Landflächen', subtitle:'Sachsen-Anhalt · 2020–2025',
    explorer:'KARTENEXPLORER', explore:'Gebiet erkunden', exploreHint:'Kartenprodukte und Jahre auswählen. Mehrere Ebenen können gleichzeitig angezeigt werden.',
    pixelLevel:'Pixel-Ebene', municipalityLevel:'Gemeindeebene', lulc:'Landbedeckung (LULC)', forestState:'Waldzustand', biomass:'Oberirdische Biomasse', ndvi:'Median-NDVI', thematicIndicators:'Thematische Indikatoren', permanentGrassland:'Dauergrünland (mind. 5 Jahre)', grasslandConversion:'Grassland 2020–2022 → Cropland 2023–2025', cropDiversity:'Kulturartenvielfalt (Kulturen ≥ 50 ha)',
    opacity:'Deckkraft', clearLayers:'Alle Themenebenen ausschalten', areaStats:'Gebietsstatistik', municipalityHint:'Gemeinde anklicken, um die zugehörigen Kennzahlen anzuzeigen.',
    selectedArea:'Ausgewähltes Gebiet', noneSelected:'Keine Auswahl', lulcArea:'Ausgewählte Produktwerte', classSelectHint:'Bitte zuerst eine Klasse auswählen und danach das Jahr aktivieren.', interactiveMap:'INTERAKTIVE KARTE', resetView:'Ansicht zurücksetzen',
    mapNote:'Wählen Sie links eine oder mehrere Kartenebenen aus.', analytics:'ANALYSE', areaOverview:'Gebietsübersicht', statsHint:'Statistiken und Diagramme werden nach Einbindung der Statistikdaten verfügbar sein.',
    products:'Kartenprodukte', period:'Zeitraum', areaByClass:'Fläche je Klasse', chartPlaceholder:'Diagramm nach Einbindung der Statistikdaten.', changeOverTime:'Veränderung über die Jahre', seriesPlaceholder:'Zeitreihe für die ausgewählte Klasse.', funding:'Förderung',
    statisticsUnavailable:'Statistikdaten nicht verfügbar', tileMissing:'Kacheln fehlen für diese Ebene oder Zoomstufe.', layerOn:'Ebene aktiviert', layerOff:'Ebene deaktiviert',
    classNames:{Artificial:'Künstliche Flächen',Wheat:'Weizen',Rapeseed:'Raps',Maize:'Mais','Sugar beet':'Zuckerrüben',Sunflower:'Sonnenblumen',Oats:'Hafer',Barley:'Gerste',Rye:'Roggen',Triticale:'Triticale',Potato:'Kartoffeln',Legumes:'Hülsenfrüchte','Forage mixtures':'Feldfuttergemenge','Other crops':'Sonstige Kulturen',Grassland:'Grünland',Trees:'Einzelbäume',Forest:'Wald','Damaged Forest':'Geschädigter Wald',Bareland:'Offener Boden',Water:'Wasser'},
    products:{lulc:'Landbedeckung',forest:'Waldzustand',biomass:'Oberirdische Biomasse',ndvi:'Median-NDVI',permanent:'Dauergrünland',conversion:'Grünlandumwandlung',crop:'Kulturartenvielfalt'},
    fundingText:'Diese Arbeit wurde durch den Europäischen Fonds für regionale Entwicklung (EFRE) und das Land Sachsen-Anhalt im Rahmen des Programms „Sachsen-Anhalt WISSENSCHAFT – Forschung und Innovation (EFRE) 2021–2027“ im Projekt ReSeDiUm (Förderkennzeichen ZS/2023/12/182669) unterstützt.'
  },
  en: {
    projectTitle:'Satellite and speech data for usable land assessment', subtitle:'Saxony-Anhalt · 2020–2025',
    explorer:'MAP EXPLORER', explore:'Explore the area', exploreHint:'Choose map products and years. Multiple layers can be displayed at the same time.',
    pixelLevel:'Pixel level', municipalityLevel:'Municipality level', lulc:'Land cover (LULC)', forestState:'Forest condition', biomass:'Above-ground biomass', ndvi:'Median NDVI', thematicIndicators:'Thematic indicators', permanentGrassland:'Permanent grassland (at least 5 years)', grasslandConversion:'Grassland 2020–2022 → Cropland 2023–2025', cropDiversity:'Crop diversity (crops ≥ 50 ha)',
    opacity:'Opacity', clearLayers:'Turn off all thematic layers', areaStats:'Area statistics', municipalityHint:'Click a municipality to view its statistics.',
    selectedArea:'Selected area', noneSelected:'None selected', lulcArea:'Selected product values', classSelectHint:'First select a class, then activate the year.', interactiveMap:'INTERACTIVE MAP', resetView:'Reset view',
    mapNote:'Select one or more map layers on the left.', analytics:'ANALYTICS', areaOverview:'Area overview', statsHint:'Statistics and charts will be available once the statistics are connected.',
    products:'Map products', period:'Period', areaByClass:'Area by class', chartPlaceholder:'Chart will be available once statistics are connected.', changeOverTime:'Change over time', seriesPlaceholder:'Time series for the selected class.', funding:'Funding',
    statisticsUnavailable:'Statistics are not available', tileMissing:'Tiles are missing for this layer or zoom level.', layerOn:'Layer enabled', layerOff:'Layer disabled',
    classNames:{}, products:{lulc:'Land cover',forest:'Forest condition',biomass:'Above-ground biomass',ndvi:'Median NDVI',permanent:'Permanent grassland',conversion:'Grassland conversion',crop:'Crop diversity'},
    fundingText:'This work was supported by the European Regional Development Fund (ERDF) and the state of Saxony-Anhalt as part of the program Saxony-Anhalt SCIENCE - Research and Innovation (ERDF) 2021-2027 in the project ReSeDiUm (funding code ZS/2023/12/182669).'
  }
};

let language = 'de';
const years = [2020,2021,2022,2023,2024,2025];
const map = L.map('map', {minZoom:6,maxZoom:20}).setView([51.95,11.65],8);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  minZoom:0,maxZoom:19,attribution:'Tiles &copy; Esri — Sources: Esri, HERE, Garmin, USGS, OpenStreetMap contributors'
}).addTo(map);

// Layer paths follow the same z/x/y.png convention as the QGIS XYZ export.
// Missing product folders are harmless until those datasets are added.
const LAYERS = {};
const layerGroups = [
  {level:'pixel', product:'lulc', key:'lulc', titleKey:'lulc', path:'LULC_class_SachsenAnhalt', kind:'categorical'},
  {level:'pixel', product:'forest', key:'forest', titleKey:'forestState', path:'Forest_State', kind:'forest', years:Array.from({length:9},(_,i)=>2017+i)},
  {level:'pixel', product:'biomass', key:'biomass', titleKey:'biomass', path:'AGB_density_SachsenAnhalt', kind:'continuous'},
  {level:'pixel', product:'ndvi', key:'ndvi', titleKey:'ndvi', path:'NDVI_median_SachsenAnhalt', kind:'continuous'},
  {level:'municipal', product:'lulc', key:'lulc', titleKey:'lulc', kind:'vector'},
  {level:'municipal', product:'forest', key:'forest', titleKey:'forestState', kind:'vector', years:Array.from({length:9},(_,i)=>2017+i)},
  {level:'municipal', product:'crop', key:'crop', titleKey:'cropDiversity', kind:'vector'}
];
const staticLayerGroups = [
  {level:'pixel', product:'permanent', titleKey:'permanentGrassland', path:'Permanent_Grassland', kind:'binary', legendColor:'#72B84A', legendLabel:{de:'Mindestens 5 Jahre Grünland',en:'Grassland in at least 5 years'}},
  {level:'pixel', product:'conversion', titleKey:'grasslandConversion', path:'Grassland_Conversion', kind:'binary', legendColor:'#D62828', legendLabel:{de:'Grassland 2020–2022 → Cropland 2023–2025',en:'Grassland 2020–2022 → Cropland 2023–2025'}}
];
const municipalStaticGroups = [
  {level:'municipal', product:'permanent', titleKey:'permanentGrassland', kind:'vector', metric:'permanent_grassland_pct', legendColor:'#72B84A'},
  {level:'municipal', product:'conversion', titleKey:'grasslandConversion', kind:'vector', metric:'conversion_pct', legendColor:'#D62828'}
];
const activeLayers = new Map();
let municipalityGeoJSON = null;
let municipalityDataReady = false;
let municipalityOutlineLayer = null;
const municipalityStats = {lclu:new Map(), forest:new Map(), thematic:new Map(), crop:new Map()};
let selectedMunicipalityId = null;
const legendNodes = new Map();

function layerId(level, product, year) { return `${level}-${product}-${year ?? 'all'}`; }
function layerUrl(config, year) {
  if (config.static) return `data/tiles/${config.path}/{z}/{x}/{y}.png`;
  return `data/tiles/${config.path}_${year}/{z}/{x}/{y}.png`;
}
function productName(product) { return I18N[language].products[product]; }
function layerDisplayName(config, year) { return year == null ? productName(config.product) : `${productName(config.product)} · ${year}`; }

function updateClassMultiSelectLabel() {
  const root = document.getElementById('analysisClassMultiSelect');
  const select = document.getElementById('analysisClasses');
  const button = document.getElementById('analysisClassToggle');
  if (!root || !select || !button) return;
  const selected = [...select.selectedOptions].map(option => option.textContent);
  button.textContent = selected.length ? `${selected.length} ${language === 'de' ? 'Klassen ausgewählt' : 'classes selected'} ▾` : (language === 'de' ? 'Klassen auswählen ▾' : 'Select classes ▾');
}

function buildLayerControls() {
  const analysisClassSelect = document.getElementById('analysisClasses');
  const multiSelect = document.getElementById('analysisClassMultiSelect');
  if (analysisClassSelect && multiSelect) {
    analysisClassSelect.replaceChildren();
    const menu = multiSelect.querySelector('.multi-select-menu');
    menu.replaceChildren();
    Object.entries(CLASS_NAMES).forEach(([id, name]) => {
      const option = document.createElement('option');
      option.value = id;
      option.textContent = I18N[language].classNames[name] || name;
      analysisClassSelect.appendChild(option);
      const label = document.createElement('label');
      label.className = 'multi-select-option';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox'; checkbox.value = id; checkbox.checked = id === '15';
      checkbox.addEventListener('change', () => {
        option.selected = checkbox.checked;
        updateClassMultiSelectLabel();
        updateAnalytics();
      });
      const text = document.createElement('span'); text.textContent = option.textContent;
      label.append(checkbox, text); menu.appendChild(label);
      option.selected = id === '15';
    });
    updateClassMultiSelectLabel();
  }
  const outlineHost = document.getElementById('municipality-outline-control');
  if (outlineHost) {
    outlineHost.innerHTML = '';
    const label = document.createElement('label');
    label.className = 'layer-check';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.addEventListener('change', () => {
      if (!municipalityOutlineLayer) return;
      if (input.checked) municipalityOutlineLayer.addTo(map);
      else map.removeLayer(municipalityOutlineLayer);
    });
    const text = document.createElement('span');
    text.textContent = language === 'de' ? 'Gemeindegrenzen anzeigen' : 'Show municipality boundaries';
    label.append(input, text);
    outlineHost.append(label);
  }
  layerGroups.forEach(config => {
    const targetId = `${config.level}-${config.product}`;
    const target = document.getElementById(targetId);
    if (!target) return;
    target.replaceChildren();
    (config.years || years).forEach(year => {
      const row = document.createElement('div');
      row.className = 'municipal-class-row';
      const label = document.createElement('label');
      label.className = 'layer-check';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const text = document.createElement('span');
      text.textContent = year;
      label.append(checkbox, text);

      let classSelect = null;
      if (config.level === 'municipal' && ['lulc','forest'].includes(config.product)) {
        classSelect = document.createElement('select');
        classSelect.className = 'municipal-class-select';
        classSelect.setAttribute('aria-label', `${config.product} class ${year}`);
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = language === 'de' ? 'Klasse wählen ↓' : 'Select class ↓';
        placeholder.selected = true;
        classSelect.appendChild(placeholder);
        const options = config.product === 'lulc'
          ? Object.entries(CLASS_NAMES).map(([id,name]) => ({id:Number(id),name}))
          : FOREST_CLASSES.map(item => ({id:item.id,name:language === 'de' ? item.de : item.name}));
        options.forEach(item => {
          const option = document.createElement('option');
          option.value = item.id;
          option.textContent = item.name;
          classSelect.appendChild(option);
        });
        classSelect.value = '';
        checkbox.disabled = true;
      }

      let currentId = null;
      const updateLayer = () => {
        const classId = classSelect && classSelect.value !== '' ? Number(classSelect.value) : undefined;
        if (classSelect && classId == null) {
          checkbox.disabled = true;
          if (checkbox.checked && currentId) toggleLayer({...config, id:currentId}, year, false);
          checkbox.checked = false;
          currentId = null;
          return;
        }
        checkbox.disabled = false;
        const id = `${layerId(config.level, config.product, year)}${classId == null ? '' : `-class-${classId}`}`;
        if (checkbox.checked && currentId && currentId !== id) {
          toggleLayer({...config, classId: Number(currentId.split('-class-').pop()), id: currentId}, year, false);
        }
        currentId = id;
        checkbox.dataset.layerId = id;
        const layerConfig = {...config, classId, id};
        LAYERS[id] = {...layerConfig, year, checkbox};
        if (checkbox.checked) toggleLayer(layerConfig, year, true);
      };
      checkbox.addEventListener('change', () => {
        if (classSelect && classSelect.value === '') {
          checkbox.checked = false;
          return;
        }
        const classId = classSelect ? Number(classSelect.value) : undefined;
        const id = `${layerId(config.level, config.product, year)}${classId == null ? '' : `-class-${classId}`}`;
        currentId = id;
        checkbox.dataset.layerId = id;
        const layerConfig = {...config, classId, id};
        LAYERS[id] = {...layerConfig, year, checkbox};
        toggleLayer(layerConfig, year, checkbox.checked);
      });
      if (classSelect) classSelect.addEventListener('change', updateLayer);
      row.append(label);
      if (classSelect) row.append(classSelect);
      target.appendChild(row);
      updateLayer();
    });
  });

  // Municipal thematic indicators: two static indicators plus annual crop diversity.
  const municipalThematicTarget = document.getElementById('municipal-thematic');
  if (municipalThematicTarget) {
    municipalThematicTarget.replaceChildren();
    municipalStaticGroups.forEach(config => {
      const id = layerId(config.level, config.product, null);
      const label = document.createElement('label');
      label.className = 'layer-check';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.dataset.layerId = id;
      checkbox.addEventListener('change', () => toggleLayer(config, null, checkbox.checked));
      const text = document.createElement('span');
      text.textContent = I18N[language][config.titleKey];
      text.dataset.municipalLayerLabel = config.product;
      label.append(checkbox, text);
      municipalThematicTarget.appendChild(label);
      LAYERS[id] = {...config, id, year:null, checkbox};
    });
  }

  // Static pixel thematic products (no year selector)
  const thematicTarget = document.getElementById('pixel-thematic');
  if (thematicTarget) {
    thematicTarget.replaceChildren();
    staticLayerGroups.forEach(config => {
      const id = layerId(config.level, config.product, null);
      const label = document.createElement('label');
      label.className = 'layer-check';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.dataset.layerId = id;
      checkbox.addEventListener('change', () => toggleLayer({...config, static:true}, null, checkbox.checked));
      const text = document.createElement('span');
      text.textContent = I18N[language][config.titleKey];
      text.dataset.staticLayerLabel = config.product;
      label.append(checkbox, text);
      thematicTarget.appendChild(label);
      LAYERS[id] = {...config, static:true, id, year:null, checkbox};
    });
  }
}

function makeLegend(config, year) {
  const box = document.createElement('div');
  box.className = 'map-legend';
  box.dataset.legendId = config.id || layerId(config.level, config.product, year);
  const head = document.createElement('div');
  head.className = 'map-legend-head';
  const title = document.createElement('span');
  title.textContent = `${config.level === 'municipal' ? productName(config.product) : layerDisplayName(config, year)}${config.classId == null ? '' : ` · ${config.product === 'lulc' ? CLASS_NAMES[config.classId] : (FOREST_CLASSES.find(item => item.id === Number(config.classId))?.[language === 'de' ? 'de' : 'name'] || '')}`}`;
  const button = document.createElement('button');
  button.className = 'map-legend-toggle';
  button.type = 'button';
  button.textContent = '−';
  button.setAttribute('aria-label', language === 'de' ? 'Legende ein-/ausklappen' : 'Show/hide legend');
  button.addEventListener('click', () => {
    box.classList.toggle('collapsed');
    button.textContent = box.classList.contains('collapsed') ? '+' : '−';
  });
  head.append(title, button);
  const content = document.createElement('div');
  content.className = 'legend-content';
  if (config.product === 'lulc' && config.level === 'pixel') {
    const items = document.createElement('div');
    items.className = 'legend-items';
    Object.entries(CLASS_NAMES).forEach(([id, name]) => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      const swatch = document.createElement('span');
      swatch.className = 'swatch';
      swatch.style.backgroundColor = COLORS[id];
      const text = document.createElement('span');
      text.textContent = `${id}. ${I18N[language].classNames[name] || name}`;
      item.append(swatch, text);
      items.appendChild(item);
    });
    content.appendChild(items);
  } else if (config.product === 'forest' && config.level === 'pixel') {
    const items = document.createElement('div');
    items.className = 'legend-items';
    FOREST_CLASSES.forEach(cls => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      const swatch = document.createElement('span');
      swatch.className = 'swatch';
      swatch.style.backgroundColor = cls.color;
      const text = document.createElement('span');
      text.textContent = `${cls.id}. ${language === 'de' ? cls.de : cls.name}`;
      item.append(swatch, text);
      items.appendChild(item);
    });
    content.appendChild(items);
  } else if (config.level === 'pixel' && (config.product === 'permanent' || config.product === 'conversion')) {
    const item = document.createElement('div'); item.className = 'legend-item';
    const swatch = document.createElement('span'); swatch.className = 'swatch'; swatch.style.backgroundColor = config.legendColor;
    const text = document.createElement('span'); text.textContent = config.legendLabel[language];
    item.append(swatch, text); content.appendChild(item);
  } else if (config.level === 'municipal' && (config.product === 'permanent' || config.product === 'conversion')) {
    const labels = config.product === 'permanent'
      ? (language === 'de' ? ['0–5 %','5–10 %','10–20 %','>20 %'] : ['0–5%','5–10%','10–20%','>20%'])
      : (language === 'de' ? ['0–0,01 %','0,01–0,05 %','0,05–0,1 %','>0,1 %'] : ['0–0.01%','0.01–0.05%','0.05–0.1%','>0.1%']);
    const colors = config.product === 'permanent'
      ? ['#f1f8e9','#aed581','#66bb6a','#2e7d32']
      : ['#fff5f0','#fcbba1','#fb6a4a','#cb181d'];
    const items = document.createElement('div'); items.className = 'legend-items';
    labels.forEach((label, i) => {
      const item = document.createElement('div'); item.className = 'legend-item';
      const swatch = document.createElement('span'); swatch.className = 'swatch'; swatch.style.backgroundColor = colors[i];
      const text = document.createElement('span'); text.textContent = label;
      item.append(swatch, text); items.appendChild(item);
    });
    content.appendChild(items);
  } else if (config.product === 'crop') {
    const items = document.createElement('div'); items.className = 'legend-items';
    [['0–3','#f1f5f9'],['4–6','#bfdbfe'],['7–9','#60a5fa'],['10+','#1d4ed8']].forEach(([label,color]) => {
      const item = document.createElement('div'); item.className = 'legend-item';
      const swatch = document.createElement('span'); swatch.className = 'swatch'; swatch.style.backgroundColor = color;
      const text = document.createElement('span'); text.textContent = label;
      item.append(swatch,text); items.appendChild(item);
    });
    content.appendChild(items);
  } else if (config.product === 'biomass' || config.product === 'ndvi') {
    const gradient = document.createElement('div'); gradient.className = 'legend-gradient';
    const scale = document.createElement('div'); scale.className = 'legend-scale';
    const left = document.createElement('span'); left.textContent = config.product === 'ndvi' ? '-1' : 'Low';
    const right = document.createElement('span'); right.textContent = config.product === 'ndvi' ? '1' : 'High';
    if (language === 'de' && config.product === 'biomass') { left.textContent='Niedrig'; right.textContent='Hoch'; }
    scale.append(left,right); content.append(gradient,scale);
  } else if (config.level === 'municipal' && ['lulc','forest'].includes(config.product)) {
    const note = document.createElement('div');
    const className = config.product === 'lulc'
      ? (language === 'de' ? (I18N.de.classNames[CLASS_NAMES[config.classId]] || CLASS_NAMES[config.classId]) : CLASS_NAMES[config.classId])
      : (FOREST_CLASSES.find(item => item.id === Number(config.classId))?.[language === 'de' ? 'de' : 'name'] || '');
    note.textContent = `${className} · ${language==='de'?'Anteil an der Gemeindefläche':'Share of municipality area'}`;
    content.append(note);
    const gradient = document.createElement('div'); gradient.className='legend-gradient municipal-spectrum';
    const scale = document.createElement('div'); scale.className='legend-scale';
    scale.innerHTML='<span>0%</span><span>1%</span><span>5%</span><span>10%</span><span>20%</span><span>40%+</span>';
    content.append(gradient,scale);
  } else {
    const note = document.createElement('div'); note.textContent = language==='de'?'Gemeindestatistik / Choropleth':'Municipality statistics / choropleth'; content.appendChild(note);
  }
  box.append(head, content);
  return box;
}

function ensureLegendContainer() {
  let container = document.getElementById('mapLegends');
  if (!container) {
    container = document.createElement('div');
    container.id = 'mapLegends';
    container.className = 'map-legends';
    document.getElementById('map').appendChild(container);
  }
  return container;
}


function indexRecords(records, keyFn) {
  const index = new Map();
  records.forEach(record => index.set(keyFn(record), record));
  return index;
}
function statKey(id, year) { return `${String(id)}|${String(year)}`; }
function dominantClass(index, id, year) {
  const rows = index.get(statKey(id, year));
  if (!rows || !rows.length) return null;
  return rows.reduce((best, row) => Number(row.area_pct) > Number(best.area_pct) ? row : best);
}
function numericColor(value, breaks, colors) {
  if (value == null || !Number.isFinite(Number(value))) return '#d9dedb';
  const n = Number(value);
  for (let i = 0; i < breaks.length; i++) if (n <= breaks[i]) return colors[i];
  return colors[colors.length - 1];
}
function municipalityStyle(feature, config, year) {
  const p = feature.properties || {};
  const id = String(p.municipality_id ?? (Number.isFinite(Number(p.fid)) ? Number(p.fid) - 1 : ''));
  let fill = '#d9dedb';

  if (config.product === 'lulc') {
    const rows = municipalityStats.lclu.get(statKey(id, year)) || [];
    const row = rows.find(item => Number(item.class_id) === Number(config.classId));
    if (row) fill = numericColor(row.area_pct, [1,5,10,20,40], ['#f7fbff','#c6dbef','#6baed6','#2171b5','#08306b','#041f4a']);
  } else if (config.product === 'forest') {
    const rows = municipalityStats.forest.get(statKey(id, year)) || [];
    const row = rows.find(item => Number(item.class_id) === Number(config.classId));
    if (row) fill = numericColor(row.area_pct, [1,5,10,20,40], ['#f7fbff','#c6dbef','#6baed6','#2171b5','#08306b','#041f4a']);
  } else if (config.product === 'permanent') {
    const row = municipalityStats.thematic.get(id);
    fill = numericColor(row?.permanent_grassland_pct, [5,10,20], ['#f1f8e9','#aed581','#66bb6a','#2e7d32']);
  } else if (config.product === 'conversion') {
    const row = municipalityStats.thematic.get(id);
    fill = numericColor(row?.conversion_pct, [0.01,0.05,0.1], ['#fff5f0','#fcbba1','#fb6a4a','#cb181d']);
  } else if (config.product === 'crop') {
    const row = municipalityStats.crop.get(statKey(id, year));
    fill = numericColor(row?.crop_diversity_n, [3,6,9], ['#f1f5f9','#bfdbfe','#60a5fa','#1d4ed8']);
  }

  const opacity = Number(document.getElementById('opacity').value) / 100;
  return {color:'#ffffff', weight:0.7, opacity:0.9, fillColor:fill, fillOpacity:opacity};
}
function getMunicipalityName(properties) {
  return properties.Name || properties.name || properties.GEN || properties.NAME || properties.municipality || (language === 'de' ? 'Gemeinde' : 'Municipality');
}
function formatNumber(value, digits = 1) {
  if (value == null || value === '' || !Number.isFinite(Number(value))) return I18N[language].statisticsUnavailable;
  return Number(value).toLocaleString(language === 'de' ? 'de-DE' : 'en-GB', {maximumFractionDigits:digits});
}
function classLabel(product, classId) {
  if (product === 'forest') {
    const item = FOREST_CLASSES.find(x => Number(x.id) === Number(classId));
    return item ? (language === 'de' ? item.de : item.name) : `Class ${classId}`;
  }
  const name = CLASS_NAMES[classId] || `Class ${classId}`;
  return I18N[language].classNames[name] || name;
}
function getMetricValue(row, product) {
  if (!row) return null;
  if (product === 'biomass') return row.mean_agbd ?? row.agbd_mean ?? row.mean ?? row.value ?? row.agbd;
  if (product === 'ndvi') return row.mean_ndvi ?? row.ndvi_mean ?? row.mean ?? row.value ?? row.ndvi;
  return row.area_ha ?? row.area ?? null;
}
function updateSelectedProductStats() {
  const host = document.getElementById('selectedProductStats');
  if (!host) return;
  host.replaceChildren();
  if (!selectedMunicipalityId) {
    host.textContent = I18N[language].noneSelected;
    return;
  }
  const selected = [...activeLayers.keys()].map(id => LAYERS[id]).filter(Boolean);
  const relevant = selected.filter(config => ['lulc','forest','biomass','ndvi','crop'].includes(config.product));
  if (!relevant.length) {
    host.textContent = I18N[language].statisticsUnavailable;
    return;
  }
  const seen = new Set();
  relevant.forEach(config => {
    const year = config.year;
    const key = `${config.product}|${year}|${config.classId ?? 'all'}`;
    if (seen.has(key)) return;
    seen.add(key);
    let label = productName(config.product);
    if (year != null) label += ` · ${year}`;
    if (config.classId != null) label += ` · ${classLabel(config.product, config.classId)}`;
    const card = document.createElement('div');
    card.className = 'stat selected-product-stat';
    const small = document.createElement('small');
    small.textContent = label;
    card.appendChild(small);

    if (config.product === 'crop') {
      // Crop diversity is defined as crop classes with at least 50 ha in the selected municipality/year.
      // Areas come from the annual LULC statistics, avoiding a second, potentially inconsistent data source.
      const rows = municipalityStats.lclu.get(statKey(selectedMunicipalityId, year)) || [];
      const cropRows = rows
        .filter(row => Number(row.class_id) >= 2 && Number(row.class_id) <= 14 && Number(row.area_ha) >= 50)
        .sort((a, b) => Number(b.area_ha) - Number(a.area_ha));
      if (!cropRows.length) {
        const unavailable = document.createElement('strong');
        unavailable.textContent = rows.length ? (language === 'de' ? 'Keine Kultur ≥ 50 ha' : 'No crop ≥ 50 ha') : I18N[language].statisticsUnavailable;
        card.appendChild(unavailable);
      } else {
        const list = document.createElement('ul');
        list.className = 'crop-area-list';
        cropRows.forEach(row => {
          const item = document.createElement('li');
          const cropName = document.createElement('span');
          cropName.textContent = classLabel('lulc', row.class_id);
          const area = document.createElement('strong');
          area.textContent = `${formatNumber(row.area_ha)} ha`;
          item.append(cropName, area);
          list.appendChild(item);
        });
        card.appendChild(list);
      }
    } else {
      let value = null;
      const unit = config.product === 'lulc' || config.product === 'forest' ? 'ha' : (config.product === 'biomass' ? 't/ha' : '');
      if (config.product === 'lulc' || config.product === 'forest') {
        const index = config.product === 'lulc' ? municipalityStats.lclu : municipalityStats.forest;
        const rows = index.get(statKey(selectedMunicipalityId, year)) || [];
        const row = rows.find(r => Number(r.class_id) === Number(config.classId));
        value = row?.area_ha;
      } else {
        const index = config.product === 'biomass' ? municipalityStats.biomass : municipalityStats.ndvi;
        const row = index?.get(statKey(selectedMunicipalityId, year));
        value = getMetricValue(row, config.product);
        if (config.product === 'ndvi' && config.classId != null) {
          const classRow = (municipalityStats.ndviRows || []).find(r =>
            String(r.municipality_id) === selectedMunicipalityId &&
            Number(r.year) === Number(year) && Number(r.class_id) === Number(config.classId));
          value = getMetricValue(classRow, 'ndvi');
        }
      }
      const strong = document.createElement('strong');
      strong.textContent = value == null ? I18N[language].statisticsUnavailable : `${formatNumber(value, config.product === 'ndvi' ? 3 : 1)}${unit ? ` ${unit}` : ''}`;
      card.appendChild(strong);
    }
    host.appendChild(card);
  });
}
function showMunicipalityStats(feature) {
  const p = feature.properties || {};
  const id = String(p.municipality_id ?? (Number.isFinite(Number(p.fid)) ? Number(p.fid) - 1 : ''));
  selectedMunicipalityId = id;
  document.getElementById('regionName').textContent = getMunicipalityName(p);
  const fmt = value => value == null || value === '' ? I18N[language].statisticsUnavailable : `${formatNumber(value)} ha`;
  const fmtPct = (value, pct) => value == null || value === '' ? I18N[language].statisticsUnavailable : `${fmt(value)}${pct == null || pct === '' ? '' : ` (${formatNumber(pct,2)}%)`}`;
  const thematic = municipalityStats.thematic.get(id);
  document.getElementById('permanentGrasslandArea').textContent = thematic ? fmtPct(thematic.permanent_grassland_ha, thematic.permanent_grassland_pct) : I18N[language].statisticsUnavailable;
  document.getElementById('grasslandConversionArea').textContent = thematic ? fmtPct(thematic.conversion_ha, thematic.conversion_pct) : I18N[language].statisticsUnavailable;
  updateSelectedProductStats();
  updateAnalytics();
}

function updateAnalytics() {
  const scope = document.getElementById('analysisScope')?.value || 'region';
  const product = document.getElementById('analysisProduct')?.value || 'lulc';
  const classSelect = document.getElementById('analysisClasses');
  const chart = document.getElementById('analysisChart');
  const note = document.getElementById('analysisNote');
  if (!chart || !classSelect) return;
  const usesClasses = product === 'lulc' || product === 'ndvi';
  classSelect.disabled = !usesClasses;
  const multiRoot = document.getElementById('analysisClassMultiSelect');
  const multiButton = document.getElementById('analysisClassToggle');
  if (multiRoot) multiRoot.hidden = !usesClasses;
  if (multiButton) multiButton.disabled = !usesClasses;
  if (!usesClasses) classSelect.value = '';
  const selectedClasses = usesClasses ? [...classSelect.selectedOptions].map(o => Number(o.value)) : [];
  if (usesClasses && !selectedClasses.length) {
    chart.innerHTML = '';
    note.textContent = language === 'de' ? 'Bitte mindestens eine Klasse auswählen.' : 'Select at least one class.';
    return;
  }
  if (scope === 'municipality' && !selectedMunicipalityId) {
    chart.innerHTML = '';
    note.textContent = language === 'de' ? 'Bitte zuerst eine Gemeinde auf der Karte anklicken.' : 'Click a municipality on the map first.';
    return;
  }
  const yearsToShow = years;
  const rowsFor = (year) => {
    if (product === 'lulc') return [...municipalityStats.lclu.values()].flat().filter(r => Number(r.year) === year);
    if (product === 'biomass') return [...(municipalityStats.biomass?.values() || [])].filter(r => Number(r.year) === year);
    if (product === 'ndvi') return (municipalityStats.ndviRows || []).filter(r => Number(r.year) === year);
    return [];
  };
  const allRows = yearsToShow.flatMap(rowsFor);
  const ids = scope === 'municipality'
    ? new Set([selectedMunicipalityId])
    : new Set(allRows.map(r => String(r.municipality_id)));
  if (!ids.size || !allRows.length) {
    chart.innerHTML = '';
    note.textContent = I18N[language].statisticsUnavailable;
    return;
  }
  const classes = usesClasses ? selectedClasses : [null];
  const series = classes.map(classId => {
    const values = yearsToShow.map(year => {
      const matching = rowsFor(year).filter(row =>
        ids.has(String(row.municipality_id)) &&
        (classId == null || Number(row.class_id) === classId));
      if (!matching.length) return null;
      if (product === 'lulc') return matching.reduce((sum,row) => sum + Number(row.area_ha || 0), 0);
      const metric = product === 'biomass'
        ? matching.map(r => getMetricValue(r,'biomass'))
        : matching.map(r => getMetricValue(r,'ndvi'));
      const valid = metric.map(Number).filter(Number.isFinite);
      return valid.length ? valid.reduce((a,b) => a+b,0)/valid.length : null;
    });
    return {classId, name: classId == null ? productName(product) : classLabel(product,classId), values};
  });
  const finite = series.flatMap(s => s.values).filter(v => v != null && Number.isFinite(v));
  if (!finite.length) {
    chart.innerHTML = '';
    note.textContent = I18N[language].statisticsUnavailable;
    return;
  }
  const min = product === 'ndvi' ? Math.min(...finite) : 0;
  const max = Math.max(...finite, min + (product === 'ndvi' ? 0.001 : 1));
  const width = 680, height = 250, left = 68, right = 18, top = 18, bottom = 38;
  const x = i => left + i * (width-left-right)/(yearsToShow.length-1);
  const y = v => height-bottom - ((v-min)/(max-min || 1))*(height-top-bottom);
  const colors = ['#26734d','#d97706','#2563eb','#9333ea','#dc2626','#0891b2'];
  const unit = product === 'lulc' ? 'ha' : (product === 'biomass' ? 't/ha' : '');
  const isLine = product === 'ndvi';
  let svg = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${isLine ? 'NDVI time series' : 'Annual values bar chart'}">`;
  [0,.25,.5,.75,1].forEach(t => {
    const value=min+(max-min)*t, yy=y(value);
    svg += `<line x1="${left}" y1="${yy}" x2="${width-right}" y2="${yy}" stroke="#e5ebe7"/>`;
    svg += `<text x="${left-8}" y="${yy+4}" text-anchor="end" font-size="10" fill="#66756c">${formatNumber(value, product==='ndvi'?3:1)}${unit ? ` ${unit}` : ''}</text>`;
  });
  yearsToShow.forEach((yr,i)=>{svg+=`<text x="${x(i)}" y="${height-10}" text-anchor="middle" font-size="11" fill="#66756c">${yr}</text>`;});
  if (isLine) {
    series.forEach((s,idx)=>{
      let segment = [];
      const flush = () => { if (segment.length > 1) svg += `<polyline points="${segment.join(' ')}" fill="none" stroke="${colors[idx%colors.length]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`; segment=[]; };
      s.values.forEach((v,i)=>{ if (v == null) { flush(); return; } segment.push(`${x(i)},${y(v)}`); svg += `<circle cx="${x(i)}" cy="${y(v)}" r="3.5" fill="${colors[idx%colors.length]}"/>`; }); flush();
    });
  } else {
    const groupWidth = Math.min(54, (width-left-right)/yearsToShow.length * 0.72);
    const barWidth = Math.max(3, groupWidth / series.length * 0.78);
    yearsToShow.forEach((yr,yearIndex)=>series.forEach((s,seriesIndex)=>{
      const value=s.values[yearIndex]; if (value == null) return;
      const totalWidth=barWidth*series.length, startX=x(yearIndex)-totalWidth/2;
      const xx=startX+seriesIndex*barWidth;
      svg += `<rect x="${xx}" y="${y(value)}" width="${barWidth-1}" height="${Math.max(0,height-bottom-y(value))}" rx="2" fill="${colors[seriesIndex%colors.length]}"><title>${s.name} · ${yr}: ${formatNumber(value,1)}${unit ? ` ${unit}` : ''}</title></rect>`;
    }));
  }
  svg+='</svg>';
  chart.innerHTML=svg;
  const legend = series.map((s,i)=>`<span class="series-key"><i style="background:${colors[i%colors.length]}"></i>${s.name}</span>`).join('');
  chart.insertAdjacentHTML('beforeend', `<div class="series-legend">${legend}</div>`);
  const metricLabel = product === 'lulc' ? (language==='de'?'Fläche':'Area') : productName(product);
  note.textContent = `${scope === 'region' ? (language==='de'?'Gesamte Region':'Whole region') : (document.getElementById('regionName')?.textContent || '')} · ${metricLabel}${unit ? ` (${unit})` : ''}`;
}

async function fetchJsonFirst(paths, required = false) {
  let lastError = null;
  for (const path of paths) {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      console.warn(`Could not load ${path}:`, error);
    }
  }
  if (required) throw (lastError || new Error(`Could not load ${paths[0]}`));
  return [];
}

async function loadMunicipalityData() {
  // Load the polygon file first: missing optional statistics must never hide the map.
  const geo = await fetchJsonFirst([
    'data/statistics/municipalities.geojson',
    'data/municipalities.geojson',
    'municipalities.geojson'
  ], true);
  if (!geo || !Array.isArray(geo.features)) {
    throw new Error('Municipality GeoJSON is not a valid FeatureCollection.');
  }

  // Keep only Gemeinde; stats municipality_id maps to GeoJSON fid - 1.
  geo.features = geo.features.filter(feature => feature.properties?.Art === 'Gemeinde');
  municipalityGeoJSON = geo;

  // Draw boundaries and click targets immediately, before loading statistics.
  municipalityOutlineLayer = L.geoJSON(geo, {
    style:{color:'#557a65',weight:1,opacity:1,fillOpacity:0,fillColor:'#91b6a0'},
    onEachFeature:(feature, layer) => {
      layer.bindTooltip(getMunicipalityName(feature.properties || {}));
      layer.on('click', () => showMunicipalityStats(feature));
    }
  });
  // Outlines are optional and start disabled; thematic municipality layers remain independent.
  municipalityDataReady = true;
  console.info(`Loaded ${geo.features.length} Gemeinde polygons.`);

  // Statistics are independent/optional. One missing file no longer blocks all polygons.
  const [lclu, forest, thematic, crop, biomass, ndvi] = await Promise.all([
    fetchJsonFirst(['data/statistics/lclu_statistics.json', 'data/lclu_statistics.json']),
    fetchJsonFirst(['data/statistics/forest_statistics.json', 'data/forest_statistics.json']),
    fetchJsonFirst(['data/statistics/thematic_statistics.json', 'data/thematic_statistics.json']),
    fetchJsonFirst(['data/statistics/crop_diversity.json', 'data/crop_diversity.json']),
    fetchJsonFirst(['data/statistics/biomass_statistics.json', 'data/biomass_statistics.json']),
    fetchJsonFirst(['data/statistics/ndvi_statistics.json', 'data/ndvi_statistics.json'])
  ]);
  const group = records => {
    const out = new Map();
    (Array.isArray(records) ? records : []).forEach(row => {
      const key = statKey(row.municipality_id, row.year);
      if (!out.has(key)) out.set(key, []);
      out.get(key).push(row);
    });
    return out;
  };
  municipalityStats.lclu = group(lclu);
  municipalityStats.forest = group(forest);
  municipalityStats.thematic = indexRecords(Array.isArray(thematic) ? thematic : [], row => String(row.municipality_id));
  municipalityStats.crop = indexRecords(Array.isArray(crop) ? crop : [], row => statKey(row.municipality_id, row.year));
  municipalityStats.biomass = indexRecords(Array.isArray(biomass) ? biomass : [], row => statKey(row.municipality_id, row.year));
  municipalityStats.ndviRows = Array.isArray(ndvi) ? ndvi : [];
  municipalityStats.ndvi = indexRecords(municipalityStats.ndviRows.filter(row => row.class_id == null), row => statKey(row.municipality_id, row.year));
  updateAnalytics();
  console.info('Municipality statistics loaded:', {
    lulc: municipalityStats.lclu.size,
    forest: municipalityStats.forest.size,
    thematic: municipalityStats.thematic.size,
    crop: municipalityStats.crop.size, biomass: municipalityStats.biomass.size, ndvi: municipalityStats.ndviRows.length
  });
}
function addMunicipalityLayer(config, year) {
  if (!municipalityDataReady || !municipalityGeoJSON) {
    console.warn('Municipality data are not ready yet.');
    return null;
  }
  const layer = L.geoJSON(municipalityGeoJSON, {
    style: feature => municipalityStyle(feature, config, year),
    onEachFeature: (feature, featureLayer) => {
      featureLayer.bindTooltip(getMunicipalityName(feature.properties || {}));
      featureLayer.on('click', () => showMunicipalityStats(feature));
    }
  });
  layer.addTo(map);
  return layer;
}
function toggleLayer(config, year, checked) {
  const id = config.id || layerId(config.level, config.product, year);
  const existing = activeLayers.get(id);
  if (checked) {
    if (existing) return;
    let layer;
    if (config.level === 'municipal') {
      layer = addMunicipalityLayer(config, year);
      if (!layer) { const control = document.querySelector(`[data-layer-id="${id}"]`); if (control) control.checked = false; return; }
    } else {
      layer = L.tileLayer(layerUrl(config, year), {
        minZoom:6, maxNativeZoom:14, maxZoom:20, opacity:Number(document.getElementById('opacity').value)/100,
        tms:false, keepBuffer:4, updateWhenZooming:false, attribution:'ReSeDiUm'
      });
      layer.on('tileerror', event => console.warn(`Tile unavailable for ${id}: ${event.tile?.src || ''}`));
      layer.addTo(map);
    }
    activeLayers.set(id, layer);
    const legendKey = config.level === 'pixel' ? `pixel-${config.product}` : `municipal-${config.product}-${config.classId ?? 'all'}`;
    if (!legendNodes.has(legendKey)) {
      const legend = makeLegend(config, year);
      legend.dataset.legendKey = legendKey;
      legendNodes.set(legendKey, legend);
      ensureLegendContainer().appendChild(legend);
    }
    updateMapTitle();
    updateSelectedProductStats();
  } else {
    if (existing) map.removeLayer(existing);
    activeLayers.delete(id);
    const legendKey = (LAYERS[id]?.level === 'pixel') ? `pixel-${LAYERS[id].product}` : `municipal-${LAYERS[id]?.product}-${LAYERS[id]?.classId ?? 'all'}`;
    if (legendKey.startsWith('pixel-')) {
      const stillActive = [...activeLayers.keys()].some(activeId => LAYERS[activeId]?.level === 'pixel' && `pixel-${LAYERS[activeId].product}` === legendKey);
      if (!stillActive) { const legend = legendNodes.get(legendKey); if (legend) legend.remove(); legendNodes.delete(legendKey); }
    } else {
      const stillActive = [...activeLayers.keys()].some(activeId => {
        const activeConfig = LAYERS[activeId];
        return activeConfig && `municipal-${activeConfig.product}-${activeConfig.classId ?? 'all'}` === legendKey;
      });
      if (!stillActive) {
        const legend = legendNodes.get(legendKey);
        if (legend) legend.remove();
        legendNodes.delete(legendKey);
      }
    }
    updateMapTitle();
    updateSelectedProductStats();
  }
}

function updateMapTitle() {
  const title = document.getElementById('mapTitle');
  const count = activeLayers.size;
  title.textContent = count ? (language==='de' ? `${count} Kartenebene${count===1?'':'n'} aktiv` : `${count} layer${count===1?'':'s'} active`) : 'ReSeDiUm · Geoportal';
}

function redrawLegends() {
  const container = ensureLegendContainer();
  container.replaceChildren();
  legendNodes.clear();
  const seen = new Set();
  [...activeLayers.keys()].forEach(id => {
    const config = LAYERS[id];
    if (!config) return;
    const key = config.level === 'pixel' ? `pixel-${config.product}` : `municipal-${config.product}-${config.classId ?? 'all'}`;
    if (seen.has(key)) return;
    seen.add(key);
    const legend = makeLegend(config, config.year);
    legend.dataset.legendKey = key;
    legendNodes.set(key, legend);
    container.appendChild(legend);
  });
}

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.getElementById('language').textContent = language === 'de' ? 'EN' : 'DE';
  document.getElementById('projectTitle').textContent = I18N[language].projectTitle;
  document.getElementById('projectSubtitle').textContent = I18N[language].subtitle;
  document.getElementById('fundingText').textContent = I18N[language].fundingText;
  const classLabelEl = document.getElementById('analysisClassLabel');
  const classHintEl = document.getElementById('analysisClassHint');
  if (classLabelEl) classLabelEl.textContent = language === 'de' ? 'Kultur / Klasse' : 'Culture / class';
  if (classHintEl) classHintEl.textContent = language === 'de' ? 'Eine oder mehrere Klassen aus der Liste auswählen.' : 'Select one or more classes from the dropdown.';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[language][key]) el.textContent = I18N[language][key];
  });
  document.querySelectorAll('[data-static-layer-label]').forEach(el => {
    const config = staticLayerGroups.find(item => item.product === el.dataset.staticLayerLabel);
    if (config) el.textContent = I18N[language][config.titleKey];
  });
  document.querySelectorAll('[data-municipal-layer-label]').forEach(el => {
    const config = municipalStaticGroups.find(item => item.product === el.dataset.municipalLayerLabel);
    if (config) el.textContent = I18N[language][config.titleKey];
  });
  // Localize the active map title and the selected municipality placeholder.
  const region = document.getElementById('regionName');
  if (region && (region.textContent === 'Keine Auswahl' || region.textContent === 'None selected')) {
    region.textContent = I18N[language].noneSelected;
  }
  const area = document.getElementById('lulcArea');
  if (area && (area.textContent === '—' || area.dataset.unavailable === 'true')) area.textContent = '—';
  const analysisClasses = document.getElementById('analysisClasses');
  if (analysisClasses) [...analysisClasses.options].forEach(option => {
    const name = CLASS_NAMES[option.value];
    option.textContent = I18N[language].classNames[name] || name;
  });
  document.querySelectorAll('.multi-select-option').forEach(label => {
    const value = label.querySelector('input')?.value;
    const name = CLASS_NAMES[value];
    if (name) label.querySelector('span').textContent = I18N[language].classNames[name] || name;
  });
  updateClassMultiSelectLabel();
  redrawLegends();
  updateMapTitle();
  updateSelectedProductStats();
  updateAnalytics();
}

document.getElementById('language').addEventListener('click', () => applyLanguage(language === 'de' ? 'en' : 'de'));
['analysisScope','analysisProduct'].forEach(id => document.getElementById(id)?.addEventListener('change', updateAnalytics));
document.getElementById('analysisClassToggle')?.addEventListener('click', () => document.getElementById('analysisClassMultiSelect')?.classList.toggle('open'));
document.addEventListener('click', event => { const root=document.getElementById('analysisClassMultiSelect'); if (root && !root.contains(event.target)) root.classList.remove('open'); });
document.getElementById('reset').addEventListener('click', () => map.setView([51.95,11.65],8));
document.getElementById('opacity').addEventListener('input', event => {
  const opacity = Number(event.target.value)/100;
  document.getElementById('opacityValue').textContent = `${event.target.value}%`;
  activeLayers.forEach(layer => { if (typeof layer.setOpacity === 'function') layer.setOpacity(opacity); else if (typeof layer.setStyle === 'function') layer.setStyle({fillOpacity:opacity}); });
});
document.getElementById('clearLayers').addEventListener('click', () => {
  [...activeLayers.keys()].forEach(id => {
    const config = LAYERS[id];
    if (config) { config.checkbox.checked = false; toggleLayer(config, config.year, false); }
  });
});

// Load the municipality polygons and their JSON statistics once.
// Copy the exported portal files into the website's data/ directory.
loadMunicipalityData().catch(error => {
  console.error('Could not load municipality GeoJSON/statistics:', error);
  const note = document.getElementById('mapNote');
  if (note) note.textContent = language === 'de'
    ? 'Gemeinde-GeoJSON konnte nicht geladen werden. Bitte Pfad und Dateinamen im data/-Ordner prüfen.'
    : 'Municipality GeoJSON could not be loaded. Check its path and filename in the data/ folder.';
});

buildLayerControls();
applyLanguage('de');
