@Component({
    selector: 'app-state-simple',
    template: `
        Are we loading? - {{(simpleService.loading | async) ? 'Yes': 'No'}} 
        
        <button (click)="simpleService.toggleLoading()">
            Toggle Loading
        </button>
    `
})
export class SimpleStateComponent {
    constructor(public simpleService: SimpleService) { }
}

@Injectable()
export class SimpleService {
    private _loading$ = new BehaviourSubject<boolean>(false)
    loading$ = this._loading$.asOservable()

    toggleLoading() {
        this._loading$.next(!!this._loading$.value)
    }
}
