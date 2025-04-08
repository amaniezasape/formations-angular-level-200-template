import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchState, SearchStore } from 'my-search';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent {
  private readonly gameService = inject(GameService)
  private readonly searchStore = inject(SearchStore)
  query = this.searchStore.asSignal;
  private items = toSignal(this.gameService.getAll(3))

  games = computed(() => this.items()?.filter(item => item.title.startsWith(this.query().value ?? '')))

}