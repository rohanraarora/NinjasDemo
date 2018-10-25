import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Course} from '../../../models/course';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private selectedCourseSubject: BehaviorSubject<Course> = new BehaviorSubject(null);
  $selectedCourse = this.selectedCourseSubject.asObservable();

  constructor() { }

  selectCourse(course: Course){
    this.selectedCourseSubject.next(course);
  }

}
