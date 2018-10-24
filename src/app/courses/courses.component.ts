import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() courses: Course[];

  constructor() { }

  ngOnInit() {
  }

  selectCourse(course: Course){
    //this.selectedCourse = course;
  }

}
