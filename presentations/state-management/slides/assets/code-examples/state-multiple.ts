@Component({
    selector: 'app-state-simple-parent',
    template: `
        <app-state-simple-child [loading]="loading" (onLoadingToggle)="loading = !loading">
        </app-state-simple-child> 
    `
})
export class SimpleStateParentComponent {
    loading = false
}

@Component({
    selector: 'app-state-simple-child',
    template: `
        Are we loading? - {{loading ? 'Yes': 'No'}} 
        <button (click)="onLoadingToggle.emit()">Toggle Loading</button>
    `
})
export class SimpleStateChildComponent {
    @Input() loading
    @output() onLoadingToggle = new EventEmitter()
}
