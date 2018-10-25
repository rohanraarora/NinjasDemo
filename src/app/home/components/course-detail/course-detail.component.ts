import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../../models/course';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course: Course;

  constructor(private home:HomeService) { }

  ngOnInit() {
    this.home.$selectedCourse.subscribe(course => {
      this.course = course;
    })
  }

}
