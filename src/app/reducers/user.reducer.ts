import { UserActionTypes, UserActionsUnion } from './../actions/user.actions';
import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, EntityMap, createEntityAdapter } from '@ngrx/entity';
import { User } from '../models/user.model';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export interface State extends EntityState<User> {
  allUsersLoaded: boolean;
  loadUsersError: any;
}

export const initialState: State = adapter.getInitialState({
  allUsersLoaded: false,
  loadUsersError: null
});

export function reducer(state = initialState, action: UserActionsUnion): State {
  switch (action.type) {
    case UserActionTypes.MAP_USERS: {
      return adapter.map(action.payload.entityMap, state);
    }

    case UserActionTypes.LOAD_USERS_SUCCESS: {
      return adapter.addAll(action.payload.users, { ...state, allUsersLoaded: true });
    }

    case UserActionTypes.LOAD_USERS_FAILED: {
      return adapter.addAll([], {
        ...state,
        allUsersLoaded: true,
        loadUsersError: action.payload.error
      });
    }

    case UserActionTypes.CLEAR_USERS: {
      return adapter.removeAll({ ...state });
    }

    default:
      return state;
  }
}

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;

// select the error load user
export const selectErrorLoadUser = (state: State) => state.loadUsersError;

// select loaded user
export const loadedUser = (state: State) => state.allUsersLoaded;
