let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let boats = [ 'Passenger', 'Trawler', 'Shipping', 'Research']
let crew = [100, 12, 75, 25]
let needRepairs = [{'name':'Passenger', 'location':'Caribbean Sea', 'repairs':'no'},
{'name':'Trawler', 'location':'North Sea', 'repairs':'yes'},{'name':'Shipping', 'location':'Black Sea', 'repairs':'no'},
{'name':'Research', 'location':'Baltic Sea','repairs':'no'}]

// boats.forEach((arr, index) => console.log(`The boat type ${arr} is at index ${index}.`))

let newSeas = seas.map(arr => arr.toLowerCase());
// console.log(newSeas)

let repairMe = needRepairs.filter(arr => arr.repairs === 'yes')
console.log(repairMe)

let newCrew = crew.reduce((sum, add) => sum + add)
console.log(newCrew)