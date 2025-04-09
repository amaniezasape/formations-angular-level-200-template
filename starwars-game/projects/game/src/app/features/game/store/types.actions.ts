import { createAction, props } from "@ngrx/store";
import { GameType } from "../models/game-type";

type TypeProps = {
    item: Omit<GameType, 'id'>; // On omet l'id car quand on reçoit l'item on ne l'a pas
}

// Action typée
export const addNewTypeFromUIAction = createAction(
    '[UI | Game] Add new type from form',
    props<TypeProps>()
)