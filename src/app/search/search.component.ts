import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('inputSearch', {static: false}) inputSearch: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.inputSearch.nativeElement); // throws an error
    const myValueSearch$ = fromEvent(this.inputSearch.nativeElement, 'input').pipe(
      map((event: any)=>event.target.value),
      tap((e)=>console.log('tap',e)),
      debounceTime(500),
      distinctUntilChanged(),
      // switchmap quit un ajax sur l'element filtrer
    ).subscribe()
}
  ngOnInit() {
  }

}


