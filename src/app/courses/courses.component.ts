import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() courses: Course[];
  @Output() courseSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectCourse(course: Course){
    this.courseSelect.emit(course);
  }

}
