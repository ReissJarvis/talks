function isEven(number: number) {
    return number % 2 == 0;
}

const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
})
    .pipe(
        filter(isEven)
    )
    .subscribe(result => console.log(result));
// Output: 2
// Output: 4

const array = [1,2,3,4];

array.filter(isEven);

console.log(array);
//output: [2,4]