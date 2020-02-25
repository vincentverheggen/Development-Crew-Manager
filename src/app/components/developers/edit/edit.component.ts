import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { Developer } from '../../../models/developer.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  frameworks = [];
  roles = [
    'FE DeveloperModel',
    'BE DeveloperModel',
    'PM',
    'PO',
    'Analyst',
  ];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Developer) {}

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  addFramework(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our framework
    if ((value || '').trim()) {
      this.data.frameworks.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeFramework(framework: string): void {
    const index = this.data.frameworks.indexOf(framework);
    if (index >= 0) {
      this.data.frameworks.splice(index, 1);
    }
  }

}
