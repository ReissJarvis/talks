import test from 'ava';

test("snapshot test", t => {
    const testObj = { test: false }
    t.snapshot(testObj)
})