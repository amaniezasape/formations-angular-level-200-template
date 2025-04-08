import { Component, computed, effect, inject } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { SearchStore } from 'my-search';
import { filter, switchMap } from 'rxjs';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  standalone: false
})
export class GameListComponent {
  private readonly gameService = inject(GameService)
  private readonly searchStore = inject(SearchStore)
  private query = this.searchStore.asSignal
  private itemsSignal = toSignal(this.gameService.getAll(3)) // take(1)
  games = computed(() => this.itemsSignal()?.filter(item => item.title.startsWith(this.query().value ?? '')))
}
