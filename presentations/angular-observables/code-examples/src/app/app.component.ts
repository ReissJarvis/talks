import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'angular-observables-presentation';
  private mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  routes: { title: string, path: string, icon?: string }[] = [
    { title: "Unsubscribe", path: "/unsubscribe", icon: 'power_off'},
    { title: "Entity Repo", path: "/entity-pattern", icon: 'storage'},
    { title: "Search", path: "/search", icon: 'search'},
    { title: "Unsubscribe", path: "."},
  ];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
