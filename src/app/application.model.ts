import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApplicationState } from './store/state/application.state';

@Injectable()
export class ApplicationModel {
  constructor(protected store: Store<ApplicationState>) {

  }

}
