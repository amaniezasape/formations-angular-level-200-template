import { Component, inject, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { ApplicationState } from '../../../reducers';
import { Store } from '@ngrx/store';
import { addNewGameAction, addNewGameFromUiAction } from '../store/games.actions';

@Component({
    selector: 'game-new-one',
    templateUrl: './new-one.component.html',
    styleUrls: ['./new-one.component.css'],
    standalone: false
})
export class NewOneComponent implements OnInit {
  private readonly tileService = inject(TileService)
  private readonly store = inject(Store<ApplicationState>)
  tiles: Tile[] = [];


  ngOnInit(): void {
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

  // Ajoute une action pour ajouter un nouveau jeu
  addNewGame(): void {
    this.store.dispatch(addNewGameAction())

    this.store.dispatch(addNewGameFromUiAction({
      item: {
        success: true,
        title: "Abe's Odyssey"
      }
    }))
  }

}
