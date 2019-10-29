import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter, switchMap, takeUntil, tap } from "rxjs/operators";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
  onDestroy = new Subject();
  searchTerm = new FormControl("");
  loading = new BehaviorSubject<boolean>(false);
  beers = new BehaviorSubject<Beer[]>([]);
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.searchTerm.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => this.loading.next(true)),
        switchMap(searchTerm => searchTerm ? this.getFact(searchTerm): of([])),
        takeUntil(this.onDestroy),
      )
      .subscribe(beers => {
        this.beers.next(beers);
        this.loading.next(false)
      })
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  getFact(searchTerm: string): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
  }

}
