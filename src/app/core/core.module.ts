import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {NinjasAppComponent} from './components/ninjas-app/ninjas-app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from '../home/home.module';
import {CourseModule} from '../course/course.module';
import {CoursePageComponent} from '../course/components/course-page/course-page.component';
import {CoursesAppComponent} from '../home/components/courses-app/courses-app.component';

export const routes: Routes = [
  {
    path: '',
    component: NinjasAppComponent,
    children: [

      {
        path: '',
        component: CoursesAppComponent
      },
      {
        path: 'courses/:course_slug',
        component: CoursePageComponent
      }

    ]
  },

  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CourseModule,
    HomeModule,
  ],
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    NinjasAppComponent
  ],
  exports: [
    NinjasAppComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
