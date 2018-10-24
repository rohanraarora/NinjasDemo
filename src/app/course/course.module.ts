import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursePageComponent} from './components/course-page/course-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursePageComponent],
  exports: [CoursePageComponent]
})
export class CourseModule { }
