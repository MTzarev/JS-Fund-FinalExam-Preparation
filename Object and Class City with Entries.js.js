function newCity(param) {
    let entries = Object.entries(param);

    for (const info of entries) {

        console.log(info.join(` -> `));
    }
}
newCity({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);