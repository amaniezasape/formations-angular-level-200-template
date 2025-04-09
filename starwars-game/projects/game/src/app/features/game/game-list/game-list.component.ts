import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchStore } from 'my-search';
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
  private itemsSignal = toSignal(this.gameService.getAll(3)) // toSignal ne fait qu'un take(1)
  
  query = this.searchStore.asSignal
  games = computed(() => this.itemsSignal()?.filter(item => item.title.startsWith(this.query().value ?? '')))
}
