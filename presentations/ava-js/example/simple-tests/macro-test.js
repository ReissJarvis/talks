import test from 'ava';

function macro(t, input, expected) {
    t.is(eval(input), expected);
}

macro.title = (providedTitle, input, expected) => `${providedTitle} ${input} = ${expected}`.trim();

test(macro, '2 + 2', 4);
test(macro, '2 * 3', 6);
test('providedTitle', macro, '3 * 3', 9);