import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MatCardPricingComponent} from './mat-card-pricing.component';
import {MatButtonModule, MatCardModule, MatDividerModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('MatCardTeamMemberComponent', function () {
  let de: DebugElement;
  let comp: MatCardPricingComponent;
  let fixture: ComponentFixture<MatCardPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatButtonModule, MatDividerModule, FormsModule],
      declarations: [MatCardPricingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardPricingComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create components', () => expect(comp).toBeDefined());

});
