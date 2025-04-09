import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { gamesReducer, GameState } from '../features/game/store/games.reducer';
import { gameTypeReducer, GameTypeState } from '../features/game/store/types.reducer';

export interface ApplicationState {
  games: GameState,
  types: GameTypeState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  games: gamesReducer,
  types: gameTypeReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
