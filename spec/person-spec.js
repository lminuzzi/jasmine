var calculator = require('../calculator');
var person = require('../person');
var calc, pers;
//SpyObj
var tape;

beforeEach(() => {
    calc = new calculator.Calculator();
    pers = new person.Person();

    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

    tape.play();
    tape.pause();
    tape.rewind(0);
})

/*
.calls.any()                retorna “false” se o Spy não foi chamado e “true” se alguma chamada já foi realizada

.calls.count()              retorna o número de vezes que o Spy foi chamado

.calls.argsFor(index)       retorna os parâmetros passados para a função de acordo com o índice indicado. Ex:setValues(5, 37);setValues.calls.argsFor(1)// retorna 37

.calls.allArgs()            retorna todos os parâmetros passados para a função

.calls.all()                retorna o contexto (this) e parâmetros passados pelas chamadas

.calls.mostRecent()         retorna o contexto (this) e parâmetros passados pela chamada mais recente

.calls.first()              retorna o contexto (this) e parâmetros passados pela primeira chamada

.calls.reset()              limpa todos os dados armazenados pelo Spy
 */

describe('Spies', () => {
    //onSpy
    it('is true when calculator.sum have been called', () => {
        spyOn(calc, 'sum');
        pers.randomCalc(calc);
        expect(calc.sum).toHaveBeenCalled();
    })
    it('is true when person.randomCalc have been called with calc', () => {
        spyOn(pers, 'randomCalc');
        var result = pers.randomCalc(calc);
        console.log("pers.randomCalc() = " + result);
        expect(pers.randomCalc).toHaveBeenCalledWith(calc);
    })
    it('is true when person.randomCalc have been called with calc and have spyOn value', () => {
        spyOn(pers, 'randomCalc').and.callThrough();
        var result = pers.randomCalc(calc);
        console.log("With callThrough - pers.randomCalc() = " + result);
        expect(pers.randomCalc).toHaveBeenCalledWith(calc);
    })
    it('is true when person.randomCalc have been called with calc and have spyOn value with return', () => {
        spyOn(pers, 'randomCalc').and.returnValue(1212);
        var result = pers.randomCalc(calc);
        console.log("With return - pers.randomCalc() = " + result);
        expect(pers.randomCalc).toHaveBeenCalledWith(calc);
    })
    it('is true when person.randomCalc have been called with calc and have spyOn value with fake value', () => {
        var fakeFunction = () => {
            return 3131;
        }
        spyOn(pers, 'randomCalc').and.callFake(fakeFunction);
        var result = pers.randomCalc(calc);
        console.log("With fakeFunction - pers.randomCalc() = " + result);
        expect(pers.randomCalc).toHaveBeenCalledWith(calc);
    })
    it('is true when spy function person.randomDiv have been called', () => {
        pers.randomDiv = jasmine.createSpy('div spy');
        pers.randomDiv();
        expect(pers.randomDiv).toHaveBeenCalled();
    })
    it('is true when return of spy function person.randomDiv is equal to 5', () => {
        pers.randomDiv = jasmine.createSpy('div spy').and.returnValue(5);
        expect(pers.randomDiv()).toEqual(5);
    })
})