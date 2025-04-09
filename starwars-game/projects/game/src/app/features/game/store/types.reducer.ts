import { createReducer, on } from "@ngrx/store";
import { GameType } from "../models/game-type";
import { State } from "./games.reducer";
import { addNewTypeFromUIAction } from "./types.actions";


export interface GameTypeState extends State<GameType> {
}

export const initialGameTypeState: GameTypeState = {
    items: [
        { id: 0, label: 'Action' },
        { id: 1, label: 'Aventure' },
        { id: 2, label: 'RPG' },
        { id: 3, label: 'Simulation' },
        { id: 4, label: 'Stratégie' },
        { id: 5, label: 'Sport' },
        { id: 6, label: 'Course' }
    ],
    loading: false
}


export const gameTypeReducer = createReducer(
    initialGameTypeState,
    on(addNewTypeFromUIAction, (state, action) => {
        const typeFictif: GameType = {
            ...action.item,
            id: Math.floor(Math.random() * 1000)
        }

        const newState: GameTypeState = {
            ...state,
            items: [...state.items, typeFictif]
        }
        return newState;
    })
)