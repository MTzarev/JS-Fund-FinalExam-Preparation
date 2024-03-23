function city(dataInfo) {
let info = Object.keys(dataInfo);


for (const key of info) {
    console.log(`${key} is ${dataInfo[key]}!`);
    
}

}
city({
    Country: "Bulgaria",
    Town: "Plovdiv",
    Area: `Smirnenski`,
    Population: 112438,
    PostCode: 4004

}
);