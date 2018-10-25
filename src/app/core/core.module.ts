import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {NinjasAppComponent} from './components/ninjas-app/ninjas-app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../../environments/environment';

export const routes: Routes = [
  {
    path: '',
    component: NinjasAppComponent,
    children: [

      {
        path: '',
        loadChildren: './../home/home.module#HomeModule'
      },
      {
        path: 'courses/:course_slug',
        loadChildren: './../course/course.module#CourseModule'
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
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    NinjasAppComponent
  ]
})
export class CoreModule { }
