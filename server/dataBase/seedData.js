//Make an array of objects based on schema

//array of locations
const locations = [
    "Arizona",
    "Colorado",
    "Chile",
    "New Mexico",
    "Nevada",
    "Oregon",
    "Utah"
]

//skiResorts - name, city, locationId
const resorts = [
    {name: "Purgatory", city: "Durango", locationId: 2},
    {name: "Snow Bowl", city: "Flagstaff", locationId: 1},
    {name: "Brian Head", city: "Brian Head", locationId: 7},
    {name: "Sipapu", city: "Vadito", locationId: 4},
    {name: "Pajarito Mountain", city: "Los Alamos", locationId: 4},
    {name: "Lee Canyon", city: "Las Vegas", locationId: 5},
    {name: "Nordic Valley", city: "Eden", locationId: 7},
    {name: "Willamette Pass", city: "Cascade Summit", locationId: 6},
    {name: "Hesperus", city: "Hesperus", locationId: 2},
    {name: "Sandia Peak", city: "Sandia Park", locationId: 4},
    {name: "Valle Nevado", city: "La Barnechea", locationId: 3}

]

//map - resortId , map image, locationId, name
const maps = [
    {title: "Purgatory Ski Trail Map", resortId: 1, locationId: 2, image: "https://www.purgatory.ski/wp-content/uploads/sites/2/2022/12/Winter_TrailMap_1-1536x1128.png.webp" },
    {title: "Snow Bowl Ski Trail Map", resortId: 2, locationId: 1, image: "https://www.snowbowl.ski/wp-content/uploads/sites/9/2023/11/AZSBTrailMap_23-24_FINAL_01-1536x929.jpg"},
    {title: "Brian Head Ski Trail Map", resortId: 3, locationId: 7, image: "https://www.brianhead.com/wp-content/uploads/sites/7/2023/02/High-Res-Trail-Map-1536x854.png.webp"},
    {title: "Sipapu Ski Trail Map", resortId: 4, locationId: 4, image: "https://www.sipapu.ski/wp-content/uploads/sites/6/Sipapu-trail-map-44.5x52.jpg.webp"},
    {title: "Pajarito Mountain Ski Trail Map", resortId: 5, locationId: 4, image: "https://www.skiresort.info/fileadmin/_processed_/7b/b8/8f/f7/9e2e9fa810.jpg"},
    {title: "Lee Canyon Ski Trail Map", resortId: 6, locationId: 5, image: "https://www.leecanyonlv.com/wp-content/uploads/sites/14/2023/12/2023-24-Trail-Map-Print-Front-scaled.jpg"},
    {title: "Nordic Valley Ski Trail Map", resortId: 7, locationId: 7, image: "https://www.nordicvalley.ski/wp-content/uploads/sites/10/2023/12/Nordic-Valley-23_24-Trail-Map-1-scaled.jpg"},
    {title: "Willamette Pass Trail Map", resortId: 8, locationId: 6, image: "https://www.snow-forecast.com/pistemaps/Willamette-pass_pistemap.jpg?1601557154"},
    {title: "Hesperus Ski Trail Map", resortId: 9, locationId: 2, image: "https://www.ski-hesperus.com/wp-content/uploads/2023/01/Hesperus-Trail-Map-Updated-scaled.jpg"},
    {title: "Sandia Peak Ski Trail Map", resortId: 10, locationId: 4, image: "https://sandiapeak.com/wp-content/uploads/2019/12/Sandia_peak_trail_map_skiing_us_forest.jpg"},
    {title: "Valle Nevado Ski Trail Map", resortId: 11, locationId: 3, image: "https://vallenevado.com/wp-content/themes/vallenevado/img/mapa-pistas/2023/MAPA_DE_PISTAS_2023-BETA_PHILIPSS.jpg"}
    
]

//export data variables for use elsewhere
module.exports = { locations, resorts, maps }