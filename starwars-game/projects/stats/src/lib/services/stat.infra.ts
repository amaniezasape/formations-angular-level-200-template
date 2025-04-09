import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { StatList } from '../models/stat-state';

@Injectable()
export class StatsInfrastructure {
  getAll(): Observable<StatList> {
    const stats = [
      { year: 2025, month: 4, nbSuccess: 10, nbFailure: 2 },
      { year: 2025, month: 3, nbSuccess: 5, nbFailure: 10 },
      { year: 2025, month: 2, nbSuccess: 15, nbFailure: 5 },
      { year: 2025, month: 1, nbSuccess: 20, nbFailure: 10 },
      { year: 2024, month: 12, nbSuccess: 2, nbFailure: 3 },
      {
        year: 2022,
        month: 4,
        nbSuccess: 3,
        nbFailure: 1
      },
      {
        year: 2023,
        month: 3,
        nbSuccess: 2,
        nbFailure: 1
      },
      {
        year: 2023,
        month: 2,
        nbSuccess: 1,
        nbFailure: 1
      },
      {
        year: 2024,
        month: 1,
        nbSuccess: 2,
        nbFailure: 1
      }
    ]

    return of(stats).pipe(delay(2000));
  }
}