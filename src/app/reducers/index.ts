import { createReducer, on } from '@ngrx/store';
import { edit, fire, hire } from './actions';
import { Developer } from '../models/developer.model';

export const initialState: Developer[] = [];

const hireDeveloper = (state, action) => {
  state.push(action.developer);
  return state;
};

const fireDeveloper = (state, action) => {
  const index = this.state.indexOf(action.developer);
  if (index >= 0) {
    this.state.splice(index, 1);
  }
};

const editDeveloper = (state, action) => {
  // TODO
  return state;
};

const devReducer = createReducer(initialState,
  on(hire, hireDeveloper),
  on(fire, fireDeveloper),
  on(edit, editDeveloper)
);

export function developerReducer(state, action) {
  return devReducer(state, action);
}
