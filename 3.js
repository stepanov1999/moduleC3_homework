function createObjNull() {
    return Object.create(null);
}

const test = createObjNull();

console.log('Количество свойств в пустом объекте:');
n = 0;
for (let prop in test) {
    console.log(test[prop]);
    n++;
}
console.log(n);

test.propA = "one";
test.propB = "two";

console.log('\nДобавленные свойства (значения):');
n = 0;
for (let prop in test) {
    console.log(test[prop]);
    n++;
}
console.log('\nКоличество свойств после добавления свойств:');
console.log(n);