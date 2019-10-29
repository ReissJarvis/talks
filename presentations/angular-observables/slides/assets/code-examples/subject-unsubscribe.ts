@Component()
export class TakeUntilUnsubscribeComponent implements OnInit, OnDestroy {
    unsubscribe = new Subject();

    ngOnInit() {
        new Observable(subscriber => {
            subscriber.next("VALUE")
        })
            .pipe(
                takeUntil(this.unsubscribe)
            )
            .subscribe(value => console.log(value))
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
