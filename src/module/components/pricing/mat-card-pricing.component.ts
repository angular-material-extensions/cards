import {Component, EventEmitter, Input, Output} from '@angular/core';

export enum ActionOptions {
  ORDER_NOW = 'order now',
  BUY_NOW = 'buy now',
  GET_STARTED = 'get started',
  GET_STARTED_TODAY = 'get started today',
  GET_STARTED_FREE = 'get started free',
  CALL_US = 'call us',
  CONTACT_US = 'contact us',

}

@Component({
  selector: 'mat-card-pricing',
  templateUrl: './mat-card-pricing.component.html',
  styleUrls: ['./mat-card-pricing.component.scss']
})
export class MatCardPricingComponent {

  @Input()
  price: number;

  @Input()
  currencyCode = 'USD';

  @Input()
  planName = 'Enter your plan name';

  @Input()
  shortDescription: string;

  @Input()
  packageContent: string[] = [];

  @Output()
  onActionClicked: EventEmitter<void> = new EventEmitter<void>();

}
