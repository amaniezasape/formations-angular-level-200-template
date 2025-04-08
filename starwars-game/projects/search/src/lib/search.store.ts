import { computed, Injectable, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';
import { initialState, SearchState } from '../public-api';

@Injectable({
  providedIn: 'root'
})
export class SearchStore { // Reducer + etat
  private readonly store = signal<SearchState>(initialState) // on va le remplacer par un signal

  dispatch(text: string): void { // c'est ce service qui met à jour et personne d'autre
    this.store.set({ // je clone toujours avant émission
      value: text
    })
  }
  
  get asSignal() {
    return computed(() => this.store())
  }
}
