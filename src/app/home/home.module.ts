import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesAppComponent} from './components/courses-app/courses-app.component';
import {CoursesComponent} from './components/courses/courses.component';
import {CourseDetailComponent} from './components/course-detail/course-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    component: CoursesAppComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [CoursesAppComponent,CoursesComponent,CourseDetailComponent]
})
export class HomeModule { }
