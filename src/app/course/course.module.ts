import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursePageComponent} from './components/course-page/course-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    component: CoursePageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [CoursePageComponent],
  exports: [CoursePageComponent]
})
export class CourseModule { }
