import { ActionReducer, ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user.reducer';

export interface State {
  users: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer
};

export function store(reducer: ActionReducer<State>): ActionReducer<any> {
  return function(state, action) {
    state = state || {};
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [store] : [];

export const selectUserState = (state: State) => state.users; // createFeatureSelector<fromUser.State>('users');

export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectUserIds
);

export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);

export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);

export const selectUserTotal = createSelector(
  selectUserState,
  fromUser.selectUserTotal
);

export const selectErrorLoadUser = createSelector(
  selectUserState,
  fromUser.selectErrorLoadUser
);

export const loadedUser = createSelector(
  selectUserState,
  fromUser.loadedUser
);
