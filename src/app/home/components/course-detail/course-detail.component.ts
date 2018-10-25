import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../../models/course';
import {HomeService} from '../../services/home.service';
import {HomeState} from '../../+state/home.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course: Course;

  constructor(private homeStore:Store<HomeState>) { }

  ngOnInit() {
    // this.home.$selectedCourse.subscribe(course => {
    //   this.course = course;
    // });

    this.homeStore.select("home").subscribe((homeState: HomeState) => {
      this.course = homeState.selectedCourse;
    })
  }

}
