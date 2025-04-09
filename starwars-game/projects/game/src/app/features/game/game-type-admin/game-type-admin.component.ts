import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { selectAllTypes } from '../store/types.selectors';
import { addNewTypeFromUIAction } from '../store/types.actions';

@Component({
  selector: 'app-game-type-admin',
  imports: [],
  templateUrl: './game-type-admin.component.html',
  styleUrl: './game-type-admin.component.css'
})
export class GameTypeAdminComponent {
  private readonly typeStore = inject(Store<ApplicationState>)


  addType() {
    this.typeStore.dispatch(addNewTypeFromUIAction({
      item: {
        label: 'Nouveau Type'
      }
    }))
  }
}
