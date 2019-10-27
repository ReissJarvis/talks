import test from 'ava';

test('Magic Assert 1', t => {
    const expected = "Im A Cool Test String"
    t.is("Im A Really Cool Test String", expected)
})

test('Magic Assert 2', t => {
    const expected = {
        name: "Tester Guy",
        age: 18
    }

    t.deepEqual({
        name: "Tester Guy",
        age: 20
    }, expected)
})