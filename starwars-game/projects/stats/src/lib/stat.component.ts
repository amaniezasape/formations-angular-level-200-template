import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, Signal } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { StatStore } from './services/stat.store';
import { StatsInfrastructure } from './services/stat.infra';
import { StatList } from './models/stat-state';
@Component({
  selector: 'lib-stats',
  imports: [CommonModule, BaseChartDirective],
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

    <div style="display: block;">
    <canvas baseChart width="1065" height="400"
      [type]="'line'"
      [data]="lineChartData()"
      [options]="lineChartOptions"
      [legend]="lineChartLegend">
    </canvas>
</div>
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
`,
providers: [StatStore, StatsInfrastructure]
})
export class StatComponent {
  @Input() inputStats: StatList = [];

  private readonly business = inject(StatStore)

  stats: Signal<StatList> = computed(() => this.inputStats)
  data = this.business.successesByYear

  lineChartData = computed<ChartConfiguration<'line'>['data'] | undefined>(() => {
      const years = this.business.years()
      const data = this.data()
  
      if(! years || ! data) {
        return
      }
  
      const line = {
        labels: years.sort((a, b) => parseInt(a) - parseInt(b)),
        datasets: [
          {
            data: data,
            label: 'Series A',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(81, 0, 255, 0.3)'
          },
        ]
      }
  
      return line
    })
  
    public lineChartOptions: ChartOptions<'line'> = {
      responsive: false
    };
    public lineChartLegend = true;
}