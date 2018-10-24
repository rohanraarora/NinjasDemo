import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/course';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CourseDetailApiResponse} from '../../models/course-detail-api.response';
import {ActivatedRoute} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  course: Course;
  loading: boolean = false;

  constructor(private http: HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramsMap => {
      this.loading = true;
      const title = paramsMap.get("course_slug");
      let params = new HttpParams();
      params = params.set("title",title);
      this.http.get<CourseDetailApiResponse>("https://codingninjas.in/api/v3/course",{
        params: params
      }).pipe(
        catchError(err => {
          console.log("Error",err);
          return of(null)
        })
      ).subscribe(response => {
        this.loading = false;
        if (response){
          this.course = response.data.course;
        }
      })
    });
  }

}
