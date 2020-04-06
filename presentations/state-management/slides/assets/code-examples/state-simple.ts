@Component({
    selector: 'app-state-simple',
    template: `
        Are we loading? - {{loading ? 'Yes': 'No'}} 
        <button (click)="loading = !!loading">Toggle Loading</button>
    `
})
export class SimpleStateComponent {
    loading = false
}
