function checkProp (str, obj) {
    return (str in obj);
}

const test = {
    propA: "one",
    propB: "two"
}

str = 'propB'
console.log(checkProp(str, test));