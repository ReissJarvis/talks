const observable = new Observable(
    subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
        }, 1000);
    }
);

observable.subscribe(
    (num) => console.log(num)
);

// 1
// 2
// 3
// 4