@Component({
    selector: 'app-simple-unsubscribe',
    templateUrl: './simple-unsubscribe.component.html',
})
export class SimpleUnsubscribeComponent{
    constructor() {
        const observable = new Observable(subscriber => {
            subscriber.next("VALUE");
        });

        const subscription = observable.subscribe(value => {
            console.log(value);
            subscription.unsubscribe();
        })
    }
}