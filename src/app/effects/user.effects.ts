import * as actions from './../actions/user.actions';
import { JsonService } from '../services/json.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, switchMap, map, catchError, delayWhen } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    tap(() => console.log('Action Load User')),
    ofType(actions.UserActionTypes.LOAD_USERS),
    switchMap(() =>
      this.jsonService.getAll().pipe(
        map(data => new actions.LoadUsersSuccess({ users: data })),
        catchError(error => of(new actions.LoadUsersFailed({ error: error })))
      )
    )
  );

  constructor(private actions$: Actions, private jsonService: JsonService) {}
}
