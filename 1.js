function printObj (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}

const test = {
    propA: "one",
    propB: "two"
}

const testProt = Object.create(test);

testProt.propC = "three";
testProt.propD = "fo";

console.log('Все свойства объекта:');
for (let prop in testProt) {
    console.log(prop, testProt[prop]);
}

console.log('\nТолько собственные свойства:');
printObj (testProt);
