import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
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
}
