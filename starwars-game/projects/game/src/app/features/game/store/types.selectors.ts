import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

const selectChildState = (state:ApplicationState) => state.types;

export const selectAllTypes = createSelector(selectChildState, state => state.items )