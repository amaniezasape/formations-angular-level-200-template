import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

const selectChildState = (state: ApplicationState) => state.games;

// Selector (i.e. comme un map de rxjs)
export const selectAllGames = createSelector(
    selectChildState,
    state => state.items
)

// Selector pour les parties réussies
export const selectAllSuccessGames = createSelector(
    selectAllGames,
    items => items.filter(item => item.success)
)

export const withError = createSelector(selectChildState, state => state.error)
export const isLoading = createSelector(selectChildState, state => state.loading)