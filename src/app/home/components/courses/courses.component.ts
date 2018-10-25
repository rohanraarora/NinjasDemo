import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../../models/course';
import {HomeService} from '../../services/home.service';
import {HomeState, SelectCourse} from '../../+state/home.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() courses: Course[];
  // @Output() courseSelect = new EventEmitter();

  constructor(private homeStore:Store<HomeState>) { }

  ngOnInit() {

  }

  selectCourse(course: Course){
    // this.courseSelect.emit(course);
    //this.home.selectCourse(course);
    this.homeStore.dispatch(new SelectCourse(course))
  }

}
