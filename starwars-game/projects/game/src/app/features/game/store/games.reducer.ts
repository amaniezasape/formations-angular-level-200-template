import { createReducer, on } from "@ngrx/store";
import { GameDto } from "../models/game.dto";
import { addNewGameAction, addNewGameFromUiAction } from "./games.actions";

// Normalement dans un autre fichier model
export interface State<T> {
    items: T[];
    loading: boolean;
    error?: unknown;
}

export interface GameState extends State<GameDto> {
}

// Etat initial
export const initialState: GameState = {
    items: [],
    loading: false
}

// Reducer
export const gamesReducer = createReducer(
    initialState,
    // Lorsqu'on dispatch addNewGameAction, on génère une nouvelle référence de l'état
    on(addNewGameAction, (state) => {
        // ici on crée un jeu fictif en dur pour l'exemple
        const gameFictif: GameDto = {
            id: 1,
            success: true,
            title: 'The Last of Us'
        }
        
        const newState: GameState = {
            ...state,
            items: [...state.items, gameFictif]
        }
        return newState;
    }),
    on(addNewGameFromUiAction, (state, action) => {
        const gameFictif: GameDto = {
            ...action.item,
            id: Math.floor(Math.random() * 1000)
        }

        const newState: GameState = {
            ...state,
            items: [...state.items, gameFictif]
        }
        return newState;
    })

)