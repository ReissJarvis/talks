import test from 'ava';

function promiseFn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 10)
    })
}

for (var i = 1, limit = 1000; i <= limit; i++) {
    test(`Test Number ${i}`, async t => {
        await promiseFn()
        t.pass();
    });
}


