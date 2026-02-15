import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  @Input() course: any;
  @Input() isDelete = false;
  @Output() delCourse = new EventEmitter();

  handleDeleteCourse() {
    this.delCourse.emit(this.course);
  }
}
