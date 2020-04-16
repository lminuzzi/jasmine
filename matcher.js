//toBe
var a = {nome: 'TreinaWeb'};
var b = {nome: 'TreinaWeb'};
module.exports.toBe = {"a": a, "b": b};

//toBeDefined and toBeUndefined
var objUndefined = {};
module.exports.toBeUndefined = objUndefined;
var objDefined = {};
objDefined.name = "TreinaWeb";
module.exports.toBeDefined = objDefined;

//toBeNan
module.exports.toBeNan = 0/0;

//toThrow: Error return
module.exports.errorReturn = () => {
    throw new Error();
};