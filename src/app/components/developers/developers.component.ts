import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from '../../models/developer.model';
import { select, Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {
  developers$: Observable<Developer[]>;
  displayedColumns: string[] = ['icon', 'firstName', 'lastName', 'role', 'frameworks', 'actions'];
  developers;
  filterValue: string;

  constructor(private store: Store<{ developers: Developer[] }>) {
    this.developers$ = store.pipe(select('developers'));
    this.developers$.subscribe(data => {
      this.developers =  new MatTableDataSource<Developer>(data);
    });
  }

  ngOnInit(): void {
  }

  applyFilter() {
    this.developers.filter = this.filterValue && this.filterValue.toLowerCase();
  }

}
