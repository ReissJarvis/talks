import test from 'ava';

function cb(fn) {
    fn()
}

test.cb('invokes callback synchronously', t => {
    t.plan(1)

    cb(() => {
        t.pass()
        t.end()
    })
})

test('loops twice', t => {
    t.plan(2)

    for (let i = 0; i < 3; i++) {
        t.true(i < 3)
    }
})