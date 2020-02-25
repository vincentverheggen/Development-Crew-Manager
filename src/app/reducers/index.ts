import { createReducer, on } from '@ngrx/store';
import { edit, fire, hire } from './actions';
import { Developer } from '../models/developer.model';

export const initialState: Developer[] = [];
let counter = 0; // should be uuid

const hireDeveloper = (state, action) => {
  action.developer.id = counter;
  counter++;
  state.push(action.developer);
  return state;
};

const fireDeveloper = (state, action) => {
  return state.filter(e => e.id !== action.developer.id);
};

const editDeveloper = (state, action) => {
  state[action.developer.id] = action.developer;
  return [...state];
};

const devReducer = createReducer(initialState,
  on(hire, hireDeveloper),
  on(fire, fireDeveloper),
  on(edit, editDeveloper)
);

export function developerReducer(state, action) {
  return devReducer(state, action);
}
