import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from '../../models/developer.model';
import { select, Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { FireComponent } from './fire/fire.component';
import { MatDialog } from '@angular/material/dialog';
import {edit, fire} from '../../reducers/actions';
import {EditComponent} from './edit/edit.component';

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

  constructor(private store: Store<{ developers: Developer[] }>, public dialog: MatDialog) {
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

  fire(developer: Developer) {
    const dialogRef = this.dialog.open(FireComponent, {
      width: 'max-content',
      data: JSON.parse(JSON.stringify(developer))
    });

    dialogRef.afterClosed().subscribe(fireDeveloper => {
      if (fireDeveloper) {
        this.store.dispatch(fire({ developer: fireDeveloper }));
      }
    });
  }

  edit(developer: Developer) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: 'max-content',
      data: JSON.parse(JSON.stringify(developer))
    });

    dialogRef.afterClosed().subscribe(editDeveloper => {
      if (editDeveloper) {
        this.store.dispatch(edit({ developer: editDeveloper }));
      }
    });
  }

}
