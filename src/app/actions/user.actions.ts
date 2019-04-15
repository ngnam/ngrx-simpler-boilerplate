import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { EntityMap } from '@ngrx/entity';

export enum UserActionTypes {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAILED = '[User] Load Users Failed',
  MAP_USERS = '[User] Map Users',
  CLEAR_USERS = '[User] Clear Users'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
  constructor(public payload?: {}) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: { users: User[] }) {}
}

export class LoadUsersFailed implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAILED;
  constructor(public payload: { error?: any }) {}
}

export class MapUsers implements Action {
  readonly type = UserActionTypes.MAP_USERS;
  constructor(public payload: { entityMap: EntityMap<User> }) {}
}

export class ClearUsers implements Action {
  readonly type = UserActionTypes.CLEAR_USERS;
}

export type UserActionsUnion =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFailed
  | MapUsers
  | ClearUsers;
