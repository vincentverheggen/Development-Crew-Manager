import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Developer } from '../../../models/developer.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {
  hireFormGroup = this.fb.group({
    // If required use Validators.required
    firstName: [null],
    lastName: [null],
    role: [null],
    frameworks: [null],
  });
  roles = [
    'FE DeveloperModel',
    'BE DeveloperModel',
    'PM',
    'PO',
    'Analyst',
  ];
  frameworks = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addFramework(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our framework
    if ((value || '').trim()) {
      this.frameworks.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeFramework(framework: string): void {
    const index = this.frameworks.indexOf(framework);
    if (index >= 0) {
      this.frameworks.splice(index, 1);
    }
  }


  onSubmit() {
    this.hireFormGroup.markAllAsTouched();
    if (this.hireFormGroup.valid) {
      const developer: Developer = {
        firstName: this.hireFormGroup.value.firstName,
        lastName: this.hireFormGroup.value.lastName,
        role: this.hireFormGroup.value.role,
        frameworks: this.frameworks
      };
      console.log(developer);
    }
  }
}
