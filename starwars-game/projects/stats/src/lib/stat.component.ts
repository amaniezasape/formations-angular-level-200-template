import { CommonModule } from '@angular/common';
import { Component, computed, Input, Signal } from '@angular/core';
import { StatList } from '../public-api';

@Component({
  selector: 'lib-stats',
  imports: [CommonModule],
  template: `
    <table border="2">
      <thead>
        <tr>
          <th>Year</th>
          <th>Month</th>
          <th>Successes</th>
          <th>Failures</th>
        </tr>
      </thead>
      <tbody>
        @let items = stats();
        @if(items){
          @for(stat of items; track stat){
            <tr>
              <td>{{ stat.year }}</td>
              <td>{{ stat.month }}</td>
              <td>{{ stat.nbSuccess }}</td>
              <td>{{ stat.nbFailure }}</td>
            </tr>
          }
        }
      </tbody>
    </table>
  `,
  styles: `
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 8px;
      text-align: left;
    }

    th {
      background-color:rgb(210, 208, 208);
    }
`
})
export class StatComponent {
  @Input() inputStats: StatList = [];

  stats: Signal<StatList> = computed(() => this.inputStats)
}