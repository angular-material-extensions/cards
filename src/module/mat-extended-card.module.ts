import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {LibComponent} from './components/lib.component';
import {MatCardPricingComponent} from './components/pricing/mat-card-pricing.component';
import {MatCardFeatureComponent} from './components/feature/mat-card-feature.component';
import {MatCardTeamMemberComponent} from './components/team/mat-card-team-member.component';
import {MatCardNetworkStateComponent} from './components/network-state/mat-card-network-state.component';
import {MatCardModule, MatButtonModule, MatDividerModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

// Export module's public API
export {LibComponent} from './components/lib.component';
export {MatCardPricingComponent} from './components/pricing/mat-card-pricing.component';
export {MatCardFeatureComponent} from './components/feature/mat-card-feature.component';
export {MatCardTeamMemberComponent} from './components/team/mat-card-team-member.component';
export {MatCardNetworkStateComponent} from './components/network-state/mat-card-network-state.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    LibComponent,
    MatCardPricingComponent,
    MatCardFeatureComponent,
    MatCardTeamMemberComponent,
    MatCardNetworkStateComponent
  ],
  declarations: [
    LibComponent,
    MatCardPricingComponent,
    MatCardFeatureComponent,
    MatCardTeamMemberComponent,
    MatCardNetworkStateComponent
  ]
})
export class MatExtendedCardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatExtendedCardModule,
      providers: []
    };
  }
}
