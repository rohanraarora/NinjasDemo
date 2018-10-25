import {Action} from '@ngrx/store';
import {Course} from '../../../models/course';

export class SelectCourse implements Action {
  readonly type = "SELECT_COURSE";
  public payload: any;
  constructor(course: Course){
    this.payload = course;
  }
}


export type HomeActions = SelectCourse;

export interface HomeState {

  selectedCourse: Course;
}


export function homeReducer(state: HomeState,action: HomeActions): HomeState{
  switch (action.type){
    case "SELECT_COURSE":
      return {selectedCourse: action.payload}
  }
  return state;
}
