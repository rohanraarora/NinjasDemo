import {Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../../../../models/course';
import {CoursesService} from '../../../core/services/courses.service';

@Component({
  selector: 'app-courses-app',
  templateUrl: './courses-app.component.html',
  styleUrls: ['./courses-app.component.css']
})
export class CoursesAppComponent implements OnInit, OnDestroy {

  courses: Course[];
  loading: boolean;
  selectedCourse: Course;

  constructor(private api: CoursesService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.loading = true;
    this.api.fetchCourses().subscribe(response => {
      this.loading = false;
      this.courses = response.data.courses;
    });
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

}
