import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HeaderComponent } from './header/header.component';
import { CoursesAppComponent } from './courses-app/courses-app.component';
import {RouterModule, Routes} from '@angular/router';
import { CoursePageComponent } from './course/components/course-page/course-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NinjasAppComponent } from './ninjas-app/ninjas-app.component';
import {CourseModule} from './course/course.module';

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
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    HeaderComponent,
    CoursesAppComponent,
    NotFoundComponent,
    NinjasAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
