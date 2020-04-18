class Person {
    randomCalc(calculator) {
        var n1 = parseInt(Math.random() * 10),
            n2 = parseInt(Math.random() * 10);
        return `${n1} + ${n2} = ${calculator.sum(n1, n2)}`;
    }
}
module.exports.Person = Person;
