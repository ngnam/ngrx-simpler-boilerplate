import { User } from './models/user.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from './reducers';
import { Observable } from 'rxjs';
import * as userActions from './actions/user.actions';

@Component({
  selector: 'app-root',
  template: `
    <div [hidden]="loadedUser$ | async">loading....</div>
    <div class="wrapper">
      <div *ngFor="let user of (users$ | async)" class="nested">
        <span>user name: {{ user.name }}</span> <span>description: {{ user.description }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      * {
        margin: 0;
        padding: 0;
      }

      .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
        grid-auto-rows: minmax(100px, auto);
      }

      .wrapper > div {
        background: #eee;
        padding: 1em;
      }

      .wrapper > div:nth-child(odd) {
        background: #ddd;
      }

      .nested {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
        grid-auto-rows: minmax(10px, auto);
      }

      .nested > span {
        background: #f5f5f5;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  users$: Observable<User[]> = this.appState$.select(store.selectAllUsers);
  loadedUser$: Observable<boolean> = this.appState$.select(store.loadedUser);

  ngOnInit(): void {
    this.appState$.dispatch(new userActions.LoadUsers());
  }
  title = 'nng-get-json';
  constructor(protected appState$: Store<store.State>) {}
}
