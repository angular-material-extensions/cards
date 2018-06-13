import {Component, Input} from '@angular/core';

@Component({
  selector: 'mat-card-feature',
  templateUrl: './mat-card-feature.component.html',
  styleUrls: ['./mat-card-feature.component.scss']
})
export class MatCardFeatureComponent {

  @Input()
  title: string;

}
