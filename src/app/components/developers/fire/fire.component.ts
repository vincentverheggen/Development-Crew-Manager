import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Developer } from '../../../models/developer.model';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss']
})
export class FireComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Developer) {}

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
