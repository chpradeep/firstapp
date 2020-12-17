import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'iotfw-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'iotfw.examples.menu.todos' },
    { link: 'stock-market', label: 'iotfw.examples.menu.stocks' },
    { link: 'theming', label: 'iotfw.examples.menu.theming' },
    { link: 'crud', label: 'iotfw.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'iotfw.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'iotfw.examples.menu.form' },
    { link: 'notifications', label: 'iotfw.examples.menu.notifications' },
    { link: 'elements', label: 'iotfw.examples.menu.elements' },
    { link: 'authenticated', label: 'iotfw.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
