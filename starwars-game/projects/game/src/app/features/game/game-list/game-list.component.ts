import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { select, Store } from '@ngrx/store';
import { SearchStore } from 'my-search';
import { ApplicationState } from '../../../reducers';
import { GameService } from '../services/game.service';
import { selectAllSuccessGames } from '../store/games.selectors';
import { selectAllTypes } from '../store/types.selectors';
import { GameTypeAdminComponent } from '../game-type-admin/game-type-admin.component';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  standalone: false,
  providers: [GameTypeAdminComponent]
})
export class GameListComponent {
  private readonly gameService = inject(GameService)
  private readonly searchStore = inject(SearchStore)
  private readonly store = inject(Store<ApplicationState>)

  private itemsSignal = toSignal(this.gameService.getAll(3)) // toSignal ne fait qu'un take(1)
  
  query = this.searchStore.asSignal
  games = computed(() => this.itemsSignal()?.filter(item => item.title.startsWith(this.query().value ?? '')))

  games$ = this.store.pipe(select(selectAllSuccessGames)) // Le pipe est optionnel ici si on ne fait pas d'autres opérations
  types$ = this.store.pipe(select(selectAllTypes))

  selectedType?: number;

  onTypeChange(event: Event) {
    console.log(event)
    if(event === undefined) {
      this.selectedType = undefined
      return
    }
    this.selectedType = Number(event)
  }
}
