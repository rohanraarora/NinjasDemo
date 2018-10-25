import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ApiResponse} from '../../../models/api.response';
import {CourseDetailResponse} from '../../../models/course-detail.response';
import {CoursesResponse} from '../../../models/courses.response';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient,private router: Router) {
  }

  fetchCourses(): Observable<ApiResponse<CoursesResponse>> {
    return this.http.get<ApiResponse<CoursesResponse>>('https://codingninjas.in/api/v3/courses').pipe(
      catchError(error => {
        console.log('Error', error);
        return of({data: {courses: []},message: "Error",error: error});
      }));
  }

  fetchCourse(title: string): Observable<ApiResponse<CourseDetailResponse>> {
    let params = new HttpParams();
    params = params.set("title",title);
    return this.http.get<ApiResponse<CourseDetailResponse>>("https://codingninjas.in/api/v3/course",{
      params: params
    }).pipe(
      catchError(err => {
        this.router.navigate(['/404']);
        return of(null)
      })
    )

  }

}
