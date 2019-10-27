import test from 'ava'
import { of } from 'rxjs'
import { map } from 'rxjs/operators'

test('Test Example 1',t => {
    t.pass()
})

function promiseFn() {
    return Promise.resolve(true)
}

test("Promise test", t => {
    return promiseFn()
        .then(value => t.true(value))
})

test("Async/Await test", async t => {
    const value = await promiseFn()
    t.true(value)
})

function cb(fn) {
    fn()
}

test.cb("Callback Test", t => {
    cb(() => {
        t.pass()
        t.end()
    })
})

test('Observable Test', t => {
    return of("test")
        .pipe(map(result => t.is(result, "test")))
})

