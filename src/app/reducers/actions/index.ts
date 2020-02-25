import { createAction, props } from '@ngrx/store';
import { Developer } from '../../models/developer.model';

export const hire = createAction('[Hire Component] Hire', props<{ developer: Developer }>());
export const fire = createAction('[Fire Component] Fire', props<{ developer: Developer }>());
export const edit = createAction('[Edit Component] Edit', props<{ developer: Developer }>());
