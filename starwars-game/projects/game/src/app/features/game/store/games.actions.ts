import { createAction, props } from "@ngrx/store";
import { GameDto } from "../models/game.dto";

// Action non typée (i.e. pas de payload)
export const addNewGameAction = createAction('[UI | Game] Add new game in array');

type GameProps = {
    item: Omit<GameDto, 'id'>; // On omet l'id car quand on reçoit l'item on ne l'a pas
}

// Action typée
export const addNewGameFromUiAction = createAction(
    '[UI | Game] Add new game from form',
    props<GameProps>()
)