import { computed, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StatList } from '../models/stat-state';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class StatsBusiness {
  getFakeStats(): Observable<StatList> {

    const stats = [
      { year: 2025, month: 4, nbSuccess: 10, nbFailure: 2 },
      { year: 2025, month: 3, nbSuccess: 5, nbFailure: 10 },
      { year: 2025, month: 2, nbSuccess: 15, nbFailure: 5 },
      { year: 2025, month: 1, nbSuccess: 20, nbFailure: 10 },
      { year: 2024, month: 12, nbSuccess: 2, nbFailure: 3 },
    ]

    return of(stats);
  }

  get years() {
    return computed(() => [... new Set(this.stats()?.map(item => item.year))])
  }

  get statsByYear() {
    return computed(() => {
      const stats = this.stats()
      const values: Record<number, number> = {}

      stats?.forEach(stat => {
        values[stat.year] = stat.nbSuccess
      })
    })
  }

  get stats() {
    return toSignal(this.getFakeStats())
  }

}