import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from '../../models/developer.model';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {
  developers$: Observable<Developer[]>;

  constructor(private store: Store<{ developers: Developer[] }>) {
    this.developers$ = store.pipe(select('developers'));
    this.developers$.subscribe(data => console.log(data));
  }

  ngOnInit(): void {
  }

}
