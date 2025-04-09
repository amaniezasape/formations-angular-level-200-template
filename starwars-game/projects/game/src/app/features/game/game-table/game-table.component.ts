import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GameDto } from '../models/game.dto';

@Component({
    selector: 'game-table',
    templateUrl: './game-table.component.html',
    styleUrls: ['./game-table.component.css'],
    standalone: false
})
export class GameTableComponent {
  @Input() games: GameDto[] = [];
}
