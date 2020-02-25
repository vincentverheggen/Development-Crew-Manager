import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { Developer } from '../../../models/developer.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ROLES_DATA } from '../../../data';
import { Store } from '@ngrx/store';
import { fire } from '../../../reducers/actions';

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
  roles = ROLES_DATA;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Developer,
    private store: Store<{ developers: Developer[] }>) {}

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

  fire(fireDeveloper: Developer) {
    this.store.dispatch(fire({ developer: fireDeveloper }));
    this.dialogRef.close();
  }
}
