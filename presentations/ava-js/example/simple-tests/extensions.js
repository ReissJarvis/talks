import test from 'ava'

test('Only Test', t => {
    t.pass()
})

test.skip('Skipped test', t => {
    t.pass()
})

test.todo('Im Gonna do this test later')

test.failing('Failing test', t => {
    throw new Error("im failing this test")
})

