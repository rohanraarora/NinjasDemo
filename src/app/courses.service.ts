import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CoursesApiResponse} from '../models/courses-api.response';
import {CourseDetailApiResponse} from '../models/course-detail-api.response';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient,private router: Router) {
  }

  fetchCourses(): Observable<CoursesApiResponse> {
    return this.http.get<CoursesApiResponse>('https://codingninjas.in/api/v3/courses').pipe(
      catchError(error => {
        console.log('Error', error);
        return of({data: {courses: []}});
      }));
  }

  fetchCourse(title: string): Observable<CourseDetailApiResponse> {
    let params = new HttpParams();
    params = params.set("title",title);
    return this.http.get<CourseDetailApiResponse>("https://codingninjas.in/api/v3/course",{
      params: params
    }).pipe(
      catchError(err => {
        this.router.navigate(['/404']);
        return of(null)
      })
    )

  }

}
