function convertToObject(strJason) {
    let info = JSON.parse(strJason)

let data = Object.keys(info)
for (const key of data) {
    console.log(`${key}: ${info[key]}`)
    
}



    console.log();
}
convertToObject('{"First Name": "George", "Age": 40, "Town from": "Sofia"}');