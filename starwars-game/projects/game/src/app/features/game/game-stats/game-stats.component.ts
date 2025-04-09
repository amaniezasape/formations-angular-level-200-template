import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatComponent, StatsInfrastructure } from "stats";

@Component({
  selector: 'game-game-stats',
  imports: [StatComponent],
  templateUrl: './game-stats.component.html',
  styleUrl: './game-stats.component.css',
  providers: [StatsInfrastructure]
})
export class GameStatsComponent {
  private readonly StatInfra = inject(StatsInfrastructure)

  stats = toSignal(this.StatInfra.getAll())
}