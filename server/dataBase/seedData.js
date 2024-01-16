//Make an array of objects based on schema

//users
const users = [
    {username: "powChaser", password: "sendIT", firstName: "Kenny", lastName: "Gato"},
    {username: "cruiseTheGnar", password: "floattheFluff", firstName: "Vanessa", lastName: "Agave"},
    {username: "smoothLikeBUTTER", password: "BlueBirdDays", firstName: "Stela", lastName: "Snow"}
]

//skiResorts
const resorts = [
    {resortId: 1, name: "Purgatory", city: "Durango", state: "Colorado"},
    {resortId: 2, name: "Snow Bowl", city: "Flagstaff", state: "Arizona"},
    {resortId: 3, name: "Brian Head", city: "Brian Head", state: "Utah"},
    {resortId: 4, name: "Sipapu", city: "Vadito", state: "New Mexico"},
    {resortId: 5, name: "Pajarito Mountain", city: "Los Alamos", state: "New Mexico"},
    {resortId: 6, name: "Lee Canyon", city: "Las Vegas", state: "Nevada"},
    {resortId: 7, name: "Nordic Valley", city: "Eden", state: "Utah"},
    {resortId: 8, name: "Willamette Pass", city: "Cascade Summit", state: "Oregon"},
    {resortId: 9, name: "Hesperus", city: "Hesperus", state: "Colorado"},
    {resortId: 10, name: "Sandia Peak", city: "Sandia Park", state: "New Mexico"}

]

//favorites
const favorites = [
    {favoritesId: 1, userId: 1, resortId: 2},
    {favoritesId: 2, userId: 3, resortId: 3},
    {favoritesId: 3, userId: 2, resortId: 8}
]

//export data variables for use elsewhere
module.exports = { users, resorts, favorites }