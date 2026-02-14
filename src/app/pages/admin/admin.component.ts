import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  model: any = {};
  coverImg: any = null;
  showError = false;

  handleAddCourse(form: NgForm) {
    if (form.invalid || !this.coverImg) {
      console.log('Form is invalid!!');
      form.control.markAllAsTouched();
      if (!this.coverImg) {
        this.showError = true;
      }
      return;
    }
    console.log(form.value);
  }

  handleFileSelection(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.coverImg = file;
      this.showError = false;
    }
  }
}
