var myValue = 0;
function myAsyncFunc(){
    setTimeout(function(){
        myValue = 10;
    }, 2000)
}

xdescribe('Async Function fail', function(){
    it('should be 10 fail', function(){
        expect(myValue).toEqual(10);
    })
})

var myValue2 = 0;

function myAsyncFunc2(done){
    setTimeout(function(){
        myValue2 = 10;
        done();
    }, 2000)
}

describe('Async Function', function(){
    beforeEach(function(done){
        myAsyncFunc2(done);
    })

    it('should be 10', function(){
        expect(myValue2).toEqual(10);
    })
})

//Promises
var myValue3 = 0;
function myAsyncFunc3(){
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            myValue3 = 10;
            resolve(myValue3);
        }, 2000)
    })
    return promise;
}

describe('Async Function Promise', function(){
    beforeEach(function(done){
        myAsyncFunc3().then(done);
    })

    it('should be 10 with Promise', function(){
        expect(myValue3).toEqual(10);
    })
    it('should be 10 async inside it', function(done){
        myAsyncFunc3().then(function(){
            expect(myValue3).toEqual(10);
            done();
        });
    })
})