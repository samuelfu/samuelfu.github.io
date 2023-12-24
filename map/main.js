let wordStates = document.querySelectorAll(".list-of-states li");
let svgStates = document.querySelectorAll("#states > *");

function removeAllOn() {
  wordStates.forEach(function(el) {
    el.classList.remove("on");
  });
  svgStates.forEach(function(el) {
    el.classList.remove("on");
  });
}

function addOnFromList(el) {
  var stateCode = el.getAttribute("data-state");
  var svgState = document.querySelector("#" + stateCode);
  el.classList.add("on");
  svgState.classList.add("on");
}

function addOnFromState(el) {
  var stateId = el.getAttribute("id");
  var wordState = document.querySelector("[data-state='" + stateId + "']");
  el.classList.add("on");
  wordState.classList.add("on");
}

wordStates.forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    addOnFromList(el);
  });
  el.addEventListener("mouseleave", function() {
     removeAllOn();
  });
  
  el.addEventListener("touchstart", function() {
    removeAllOn();
    addOnFromList(el);
  });
});

svgStates.forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    addOnFromState(el);
  });
  el.addEventListener("mouseleave", function() {
     removeAllOn();
  });
  
  el.addEventListener("touchstart", function() {
    removeAllOn();
    addOnFromState(el);
  });
});

const birdImages = {
    AL: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Northern_Flicker.jpg',
    AK: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Denali_National_Park_Ptarmigan.jpg',
    AZ: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Campylorhynchus_brunneicapillus_20061226.jpg',
    AR: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Mimus_polyglottos_adult_02_cropped.jpg',
    CA: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/California_quail.jpg',
    CO: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Lark_Bunting_%28male%29_Pawnee_National_Grasslands_CO_2018-06-06_17-03-26_%2840841912423%29.jpg',
    CT: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Turdus-migratorius-002.jpg',
    DE: 'https://www.backyardchickens.com/attachments/0f0c03d4_delaware_blue_hen-524-778673-jpeg.545690/',
    FL: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Mimus_polyglottos_adult_02_cropped.jpg',
    GA: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Brown_Thrasher-27527-2.jpg',
    HI: 'https://en.wikipedia.org/wiki/File:Branta_sandvicensis_-WWT_Slimbridge,_Gloucestershire,_England-8a.jpg',
    ID: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Mountain_Bluebird.jpg',
    IL: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    IN: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    IA: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Carduelis-tristis-002.jpg',
    KS: 'URL_FOR_KANSAS_STATE_BIRD',
    KY: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    LA: 'URL_FOR_LOUISIANA_STATE_BIRD',
    ME: 'URL_FOR_MAINE_STATE_BIRD',
    MD: 'URL_FOR_MARYLAND_STATE_BIRD',
    MA: 'URL_FOR_MASSACHUSETTS_STATE_BIRD',
    MI: 'URL_FOR_MICHIGAN_STATE_BIRD',
    MN: 'URL_FOR_MINNESOTA_STATE_BIRD',
    MS: 'URL_FOR_MISSISSIPPI_STATE_BIRD',
    MO: 'URL_FOR_MISSOURI_STATE_BIRD',
    MT: 'URL_FOR_MONTANA_STATE_BIRD',
    NE: 'URL_FOR_NEBRASKA_STATE_BIRD',
    NV: 'URL_FOR_NEVADA_STATE_BIRD',
    NH: 'URL_FOR_NEW_HAMPSHIRE_STATE_BIRD',
    NJ: 'URL_FOR_NEW_JERSEY_STATE_BIRD',
    NM: 'URL_FOR_NEW_MEXICO_STATE_BIRD',
    NY: 'URL_FOR_NEW_YORK_STATE_BIRD',
    NC: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    ND: 'URL_FOR_NORTH_DAKOTA_STATE_BIRD',
    OH: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    OK: 'URL_FOR_OKLAHOMA_STATE_BIRD',
    OR: 'URL_FOR_OREGON_STATE_BIRD',
    PA: 'URL_FOR_PENNSYLVANIA_STATE_BIRD',
    RI: 'URL_FOR_RHODE_ISLAND_STATE_BIRD',
    SC: 'URL_FOR_SOUTH_CAROLINA_STATE_BIRD',
    SD: 'URL_FOR_SOUTH_DAKOTA_STATE_BIRD',
    TN: 'URL_FOR_TENNESSEE_STATE_BIRD',
    TX: 'URL_FOR_TEXAS_STATE_BIRD',
    UT: 'URL_FOR_UTAH_STATE_BIRD',
    VT: 'URL_FOR_VERMONT_STATE_BIRD',
    VA: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    WA: 'URL_FOR_WASHINGTON_STATE_BIRD',
    WV: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    WI: 'URL_FOR_WISCONSIN_STATE_BIRD',
    WY: 'URL_FOR_WYOMING_STATE_BIRD'
};


// Create a style element
let style = document.createElement('style');

for (const state in birdImages) {
    // Define the CSS rule
    let css = `#states #${state}.on { fill: url(#image${state}); }`;

    // Append the CSS rule to the style element
    style.appendChild(document.createTextNode(css));
}
// Append the style element to the document head
document.head.appendChild(style);


// Create the necessary SVG elements
var svgNS = 'http://www.w3.org/2000/svg';
var g = document.getElementById('states'); // Replace 'mySvg' with your SVG element's ID

for (const state in birdImages) {
// Create <defs> element
var defs = document.createElementNS(svgNS, 'defs');

// Create <pattern> element
var pattern = document.createElementNS(svgNS, 'pattern');
pattern.setAttribute('id', `image${state}`);
pattern.setAttribute('patternUnits', 'userSpaceOnUse');
pattern.setAttribute('width', '75');
pattern.setAttribute('height', '75');

// Create <image> element
var image = document.createElementNS(svgNS, 'image');
image.setAttribute('href', birdImages[state]);
image.setAttribute('x', '0');
image.setAttribute('y', '0');
image.setAttribute('width', '75');
image.setAttribute('height', '75');
image.setAttribute('preserveAspectRatio', 'xMidYMid slice');

// Append <image> to <pattern>
pattern.appendChild(image);

// Append <pattern> to <defs>
defs.appendChild(pattern);

g.appendChild(defs);
}