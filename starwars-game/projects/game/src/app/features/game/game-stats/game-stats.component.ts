import { Component, inject } from '@angular/core';
import { StatComponent } from "../../../../../../stats/src/lib/stat.component";
import { StatStore } from "my-stats"
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'game-game-stats',
  imports: [StatComponent],
  templateUrl: './game-stats.component.html',
  styleUrl: './game-stats.component.css'
})
export class GameStatsComponent {
  private readonly StatStore = inject(StatStore)
  stats = toSignal(this.StatStore.getFakeStats())
}