import {Component, Input} from '@angular/core';

@Component({
  selector: 'mat-card-network-state',
  templateUrl: './mat-card-network-state.component.html',
  styleUrls: ['./mat-card-network-state.component.scss']
})
export class MatCardNetworkStateComponent {

  @Input()
  title: string;

}
