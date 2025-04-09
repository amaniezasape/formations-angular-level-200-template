import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatComponent, StatsInfrastructure } from "stats";

@Component({
  selector: 'game-game-stats',
  imports: [StatComponent, JsonPipe, AsyncPipe],
  templateUrl: './game-stats.component.html',
  styleUrl: './game-stats.component.css',
  providers: [StatsInfrastructure]
})
export class GameStatsComponent {
  private readonly StatInfra = inject(StatsInfrastructure)
  stats = toSignal(this.StatInfra.getAll())
  // stats = this.StatStore.getAll()
}