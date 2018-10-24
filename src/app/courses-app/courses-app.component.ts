import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Course} from '../../models/course';
import {CoursesApiResponse} from '../../models/courses-api.response';
import {of} from 'rxjs';

@Component({
  selector: 'app-courses-app',
  templateUrl: './courses-app.component.html',
  styleUrls: ['./courses-app.component.css']
})
export class CoursesAppComponent implements OnInit, OnDestroy {

  courses: Course[];
  loading: boolean;
  selectedCourse: Course;

  constructor(private http: HttpClient) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.loading = true;
    this.http.get<CoursesApiResponse>('https://codingninjas.in/api/v3/courses').pipe(
      catchError(error => {
        console.log('Error', error);
        return of({data: {courses: []}});
      })).subscribe(response => {
      this.loading = false;
      this.courses = response.data.courses;
    });
  }

  selectCourse(course: Course){
    this.selectedCourse = course;
  }

}
