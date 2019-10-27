var assert = require('assert');

function promiseFn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 10)
    })
}

describe('Mocha Load Test', function() {
    for (var i = 1, limit = 1000; i <= limit; i++) {
        it(`Test Number ${i}`, async () => {
            await promiseFn()
            assert(true)
        })
    }
});