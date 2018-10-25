import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../../models/course';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() courses: Course[];
  // @Output() courseSelect = new EventEmitter();

  constructor(private home:HomeService) { }

  ngOnInit() {
  }

  selectCourse(course: Course){
    // this.courseSelect.emit(course);
    this.home.selectCourse(course);
  }

}
