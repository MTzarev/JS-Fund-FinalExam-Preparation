function convertToJSON(firstName, lastName, hairColor) {
    let personInfo = {};
    personInfo.name = firstName;
    personInfo.lastName = lastName;
    personInfo.hairColor = hairColor;
    let converted = JSON.stringify(personInfo)
    console.log(converted);
}
convertToJSON('Miroslav', 'Tzarev', 'Chestnut');