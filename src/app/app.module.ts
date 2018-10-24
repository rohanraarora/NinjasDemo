import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HeaderComponent } from './header/header.component';
import { CoursesAppComponent } from './courses-app/courses-app.component';
import {RouterModule, Routes} from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CoursesAppComponent
  },
  {
    path: 'courses/:course_slug',
    component: CoursePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    HeaderComponent,
    CoursesAppComponent,
    CoursePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
