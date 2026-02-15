import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CourseCardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  model: any = {};
  coverImg: any = null;
  coverImgPreview: string | ArrayBuffer | null = null;
  showError = false;
  courses: any[] = [];

  ngOnInit(): void {
    this.getExistingCourses();
  }

  getExistingCourses() {
    const existingCourses = localStorage.getItem(Strings.STORAGE_KEY);
    if (existingCourses) {
      this.courses = JSON.parse(existingCourses);
    }
  }
  handleAddCourse(form: NgForm) {
    if (form.invalid || !this.coverImg) {
      console.log('Form is invalid!!');
      form.control.markAllAsTouched();
      if (!this.coverImg) {
        this.showError = true;
      }
      return;
    }
    this.saveToLocalStorage(form.value);
    form.reset();
    this.coverImg = null;
    this.coverImgPreview = null;
  }

  handleFileSelection(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.coverImg = file;
      this.showError = false;

      // Preview link generate
      const reader = new FileReader();
      reader.onload = () => {
        this.coverImgPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveToLocalStorage(formValue: any) {
    const newCourse = {
      ...formValue,
      image: this.coverImgPreview,
    };
    this.courses = [...this.courses, newCourse];
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(this.courses));
  }

  handleDeleteCourse(course: any) {
    this.courses = this.courses.filter(
      (course_item) => course_item.title !== course.title,
    );
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(this.courses));
  }
}
