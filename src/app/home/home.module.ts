import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesAppComponent} from './components/courses-app/courses-app.component';
import {CoursesComponent} from './components/courses/courses.component';
import {CourseDetailComponent} from './components/course-detail/course-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store'
import {homeReducer} from './+state/home.state';

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
    SharedModule,
    StoreModule.forFeature("home",homeReducer,{initialState: {selectedCourse: null}})
  ],
  declarations: [CoursesAppComponent,CoursesComponent,CourseDetailComponent]
})
export class HomeModule { }
