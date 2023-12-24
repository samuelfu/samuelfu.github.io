const stateBirds = {
    AL: "Yellowhammer",
    AK: "Willow Ptarmigan",
    AZ: "Cactus Wren",
    AR: "Northern Mockingbird",
    CA: "California Quail",
    CO: "Lark Bunting",
    CT: "American Robin",
    DE: "Delaware Blue Hen",
    FL: "Northern Mockingbird",
    GA: "Brown Thrasher",
    HI: "Hawaiian Goose (Nene)",
    ID: "Mountain Bluebird",
    IL: "Northern Cardinal",
    IN: "Northern Cardinal",
    IA: "Eastern Goldfinch",
    KS: "Western Meadowlark",
    KY: "Northern Cardinal",
    LA: "Brown Pelican",
    ME: "Chickadee",
    MD: "Baltimore Oriole",
    MA: "Black-capped Chickadee",
    MI: "American Robin",
    MN: "Common Loon",
    MS: "Northern Mockingbird",
    MO: "Eastern Bluebird",
    MT: "Western Meadowlark",
    NE: "Western Meadowlark",
    NV: "Mountain Bluebird",
    NH: "Purple Finch",
    NJ: "Eastern Goldfinch",
    NM: "Greater Roadrunner",
    NY: "Eastern Bluebird",
    NC: "Northern Cardinal",
    ND: "Western Meadowlark",
    OH: "Northern Cardinal",
    OK: "Scissor-tailed Flycatcher",
    OR: "Western Meadowlark",
    PA: "Ruffed Grouse",
    RI: "Rhode Island Red",
    SC: "Carolina Wren",
    SD: "Ring-necked Pheasant",
    TN: "Northern Mockingbird",
    TX: "Northern Mockingbird",
    UT: "California Gull",
    VT: "Hermit Thrush",
    VA: "Northern Cardinal",
    WA: "Willow Goldfinch",
    WV: "Northern Cardinal",
    WI: "American Robin",
    WY: "Western Meadowlark"
  };
  

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
  let path = document.querySelector(`#${stateId}`);
  let bird = document.querySelector(`.bird`);
  bird.textContent = stateBirds[path.id];
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
    KS: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/WesternMeadowlark23.jpg',
    KY: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    LA: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Brown_pelican_-_natures_pics.jpg',
    ME: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Poecile-atricapilla-001.jpg',
    MD: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Icterus-galbula-002.jpg',
    MA: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Poecile-atricapilla-001.jpg',
    MI: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Turdus-migratorius-002.jpg',
    MN: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Common_Loon_head_sideways.jpg',
    MS: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Mimus_polyglottos_adult_02_cropped.jpg',
    MO: 'https://upload.wikimedia.org/wikipedia/commons/8/83/EasternbluebirdB9.jpg',
    MT: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/WesternMeadowlark23.jpg',
    NE: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/WesternMeadowlark23.jpg',
    NV: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Mountain_Bluebird.jpg',
    NH: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Purple_Finch.jpg',
    NJ: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Carduelis-tristis-002.jpg',
    NM: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Geococcyx_californianus.jpg',
    NY: 'https://upload.wikimedia.org/wikipedia/commons/8/83/EasternbluebirdB9.jpg',
    NC: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    ND: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/WesternMeadowlark23.jpg',
    OH: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    OK: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Scissortailedfly700.JPG',
    OR: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/WesternMeadowlark23.jpg',
    PA: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Ruffed_Grouse_%2818645551408%29.jpg',
    RI: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Rhode_Island_Red.jpg',
    SC: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Carolina_Wren_2.jpg',
    SD: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Phasianus_colchicus_2_tom_%28Lukasz_Lukasik%29.jpg',
    TN: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Mimus_polyglottos_adult_02_cropped.jpg',
    TX: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Mimus_polyglottos_adult_02_cropped.jpg',
    UT: 'https://upload.wikimedia.org/wikipedia/commons/8/85/CaliforniaGull23.jpg',
    VT: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Hermitthrush63.jpg',
    VA: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    WA: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Carduelis-tristis-002.jpg',
    WV: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cardinal.jpg',
    WI: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Turdus-migratorius-002.jpg',
    WY: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/WesternMeadowlark23.jpg'
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

// Get the SVG element
var svg = document.getElementById(`${state}`); // Replace 'yourSVGId' with your SVG element's ID

// Get the bounding box of the SVG
var bbox = svg.getBBox();
console.log(bbox)

// Create <pattern> element
var pattern = document.createElementNS(svgNS, 'pattern');
pattern.setAttribute('id', `image${state}`);
pattern.setAttribute('patternUnits', 'userSpaceOnUse');
pattern.setAttribute('width', String(bbox.width * 0.5));
pattern.setAttribute('height', String(bbox.height * 0.5));

// Create <image> element
var image = document.createElementNS(svgNS, 'image');
image.setAttribute('href', birdImages[state]);
image.setAttribute('x', '0');
image.setAttribute('y', '0');
image.setAttribute('width', String(bbox.width * 0.5));
image.setAttribute('height', String(bbox.height * 0.5));
image.setAttribute('preserveAspectRatio', 'xMidYMid slice');

// Append <image> to <pattern>
pattern.appendChild(image);

// Append <pattern> to <defs>
defs.appendChild(pattern);

g.appendChild(defs);
}

// Loop through each path in the SVG
document.querySelectorAll('path').forEach(path => {
    const stateCode = path.getAttribute('id');
    if (stateBirds[stateCode]) {
      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      title.textContent = stateBirds[stateCode]; // Set the state bird name as text content
      path.appendChild(title); // Append the <title> to the path
    }
  });