import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../models/course';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {CoursesApiResponse} from '../models/courses-api.response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  courses: Course[];
  loading: boolean;

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

}
