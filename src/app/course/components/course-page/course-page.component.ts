import {Component, OnInit} from '@angular/core';
import {Course} from '../../../../models/course';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../../../core/services/courses.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  course: Course;
  loading: boolean = false;

  constructor(private api: CoursesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramsMap => {
      this.loading = true;
      const title = paramsMap.get('course_slug');
      this.api.fetchCourse(title).subscribe(response => {
        this.loading = false;
        if (response) {
          this.course = response.data.course;
        }
      });
    });
  }

}
