import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesAppComponent} from './components/courses-app/courses-app.component';
import {CoursesComponent} from './components/courses/courses.component';
import {CourseDetailComponent} from './components/course-detail/course-detail.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: CoursesAppComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoursesAppComponent,CoursesComponent,CourseDetailComponent],
  exports: [CoursesAppComponent,CoursesComponent,CourseDetailComponent]
})
export class HomeModule { }
